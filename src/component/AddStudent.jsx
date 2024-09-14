import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import {useNavigate} from "react-router-dom"
import {toast} from "react-toastify"
function AddStudent() {
  const [formData, setFormData] = useState({
    rollNo: "",
    username: "",
    grade: "",
    password: "",
  });
  const navigate=useNavigate();
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5001/student/register',formData)
    .then((res)=>{
      if(res.data.registered){
        toast.success(res.data.message, {
          position: "top-center",
          autoClose: 1500,
        });
        navigate('/dashboard');
      }
      console.log(res)
    })
    .catch((err)=>{
      console.log(err);
    })
  };
  // Handle input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 ">
      <motion.div
        className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md mt-6"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold text-center mb-6">Add Student</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rollNo">
              Roll No
            </label>
            <motion.input
              id="rollNo"
              type="text"
              value={formData.rollNo}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              whileFocus={{ scale: 1.05 }}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <motion.input
              id="username"
              type="text"
              value={formData.username}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              whileFocus={{ scale: 1.05 }}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="grade">
              Grade
            </label>
            <motion.input
              id="grade"
              type="text"
              value={formData.grade}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              whileFocus={{ scale: 1.05 }}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <motion.input
              id="password"
              type="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              whileFocus={{ scale: 1.05 }}
            />
          </div>
          <motion.button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Register
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}

export default AddStudent;
