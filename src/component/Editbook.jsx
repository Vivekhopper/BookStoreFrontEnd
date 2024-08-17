import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import {toast} from "react-toastify"
function Editbook() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [formData, setFormData] = useState({
    bookname: "",
    authorname: "",
    imageurl: "",
  });

  useEffect(() => {
    axios.get(`http://localhost:5001/book/book/${id}`)
      .then((res) => {
        setFormData({
          bookname: res.data.bookname,
          authorname: res.data.authorname,
          imageurl: res.data.imageurl,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5001/book/book/${id}`, formData)
      .then((res) => {
        if (res.data.success) {
          toast.success(res.data.message, {
            position: "top-center",
            autoClose: 1500,
          });
          navigate("/books");
        }
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
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
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <motion.div
        className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold text-center mb-6">Edit Book</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="bookname"
            >
              Book Name
            </label>
            <motion.input
              id="bookname"
              type="text"
              value={formData.bookname}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              whileFocus={{ scale: 1.05 }}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="authorname"
            >
              Author Name
            </label>
            <motion.input
              id="authorname"
              type="text"
              value={formData.authorname}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              whileFocus={{ scale: 1.05 }}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="imageurl"
            >
              Image URL
            </label>
            <motion.input
              id="imageurl"
              type="text"
              value={formData.imageurl}
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
            Update Book
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}

export default Editbook;
