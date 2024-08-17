import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios"
import {useNavigate} from "react-router-dom"
import {toast} from "react-toastify"
function Login({setRole}) {
  // State for login details
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    role: "",
  });
const navigate=useNavigate()
  // Handler for input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handler for form submission
  axios.defaults.withCredentials=true
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5001/auth/login', formData)
      .then((res) => {
        const message=res.data.message
        // console.log(message);
        if (res.data.login && res.data.role === 'admin') {
          toast.success("Admin Login Successful", {
            position: "top-center",
            autoClose: 1500,
          });
          setRole('admin');
          navigate('/dashboard');
        } else if (res.data.login && res.data.role === 'student') {
          toast.success("Student Login Successful", {
            position: "top-center",
            autoClose: 1500,
          });
          setRole('student');
          navigate('/');
        }
        else if(message==="Password is incorrcet" || message==="admin not registered"){
          toast.error(message|| 'An error occurred', {
            position: "top-center",
            autoClose: 1500,
          });
        }
      })
      .catch((err) => {
        console.log(res.data.message)
        toast.error(res.data.message|| 'An error occurred', {
          position: "top-center",
          autoClose: 1500,
        });
        // console.log(err);
      });
  };
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <motion.div
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">
             username
            </label>
            <input
              type="text"
              id="email"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="role" className="block text-gray-700 mb-2">
              Role
            </label>
            <select
              id="role"
              name="role"
              onChange={handleChange}
              value={formData.role}
              className="w-full p-2 border border-gray-300 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
            >
              <option value="" disabled>Select a role</option>
              <option value="admin">Admin</option>
              <option value="student">Student</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Login
          </button>
        </form>
      </motion.div>
    </div>
  );
}

export default Login;
