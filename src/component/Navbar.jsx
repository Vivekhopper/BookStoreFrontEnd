import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar({role}) {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-blue-600 p-4 pr-28  pl-28 shadow-md fixed w-full z-10  "
    >
      <div className="container mx-auto flex justify-between items-center">
        <motion.span
          className="text-white text-2xl font-bold"
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          Book Store
        </motion.span>
        <div className="flex space-x-4">
          <motion.div
            whileHover={{ scale: 1.1 }}
            initial={{ x: 600 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
            className="text-white"
          >
            <Link to="/books">Books</Link>
          </motion.div>
        {role === "admin" && <>
       
          <motion.div
            whileHover={{ scale: 1.1 }}
            initial={{ x: 500 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
            className="text-white"
          >
            <Link to="/addbook">Add Book</Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            initial={{ x: 400 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
            className="text-white"
          >
            <Link to="/addstudent">Add Student</Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            initial={{ x: 300 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
            className="text-white"
          >
            <Link to="/dashboard">Dashboard</Link>
          </motion.div>
          </>}
          {role === "" ?
          <motion.div
          whileHover={{ scale: 1.1 }}
          initial={{ x: 200 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
          className="text-white"
          >
            <Link to="/login">Login</Link>
          </motion.div>
          :
          <motion.div
          whileHover={{ scale: 1.1 }}
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
          className="text-white"
          >
            <Link to="/logout">Logout</Link>
          </motion.div>
          }
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;
