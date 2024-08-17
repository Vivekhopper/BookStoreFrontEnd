import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
function Bookscard({ book, role }) {
  const { authorname, bookname, imageurl } = book;

  // console.log(role)
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-sm rounded-md overflow-hidden w-48 pt-20 grid-cols-3 "
    >
      <motion.img
        src={imageurl}
        alt={bookname}
        className="w-full h-32 object-cover"
        whileHover={{ scale: 1.1 }}
      />
      <div className="p-3">
        <motion.h3
          className="text-lg font-semibold"
          whileHover={{ scale: 1.05 }}
        >
          {bookname}
        </motion.h3>
        <motion.h4 className="text-gray-600" whileHover={{ scale: 1.05 }}>
          {authorname}
        </motion.h4>

        {role === "admin" && 
          <div className="flex justify-between mt-2">
            <Link
              to={`/book/${book._id}`}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
            >
              Edit
            </Link>
            <Link
              to={`/delete/${book._id}`}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
            >
              Delete
            </Link>
          </div>
        }
      </div>
    </motion.div>
  );
}
export default Bookscard;
