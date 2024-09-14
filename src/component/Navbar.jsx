import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar({ role }) {
  const [isOpen, setIsOpen] = useState(false); 
  useEffect(() => {
    setIsOpen(false); 
  }, [role]);

  const toggleMenu = () => {
    setIsOpen(!isOpen); 
  };

  const handleMenuItemClick = () => {
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-blue-600 p-4 shadow-md fixed w-full z-10"
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

       
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <FaTimes className="text-white text-2xl" />
            ) : (
              <FaBars className="text-white text-2xl" />
            )}
          </button>
        </div>

      
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:items-center md:space-x-4 absolute md:static top-16 left-0 w-full md:w-auto bg-blue-600 md:bg-transparent`}
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            initial={{ x: 600 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
            className="text-white px-4 py-2 md:py-0"
            onClick={handleMenuItemClick} 
          >
            <Link to="/books">Books</Link>
          </motion.div>

        
          {role === "admin" && (
            <>
              <motion.div
                whileHover={{ scale: 1.1 }}
                initial={{ x: 500 }}
                animate={{ x: 0 }}
                transition={{ duration: 1 }}
                className="text-white px-4 py-2 md:py-0"
                onClick={handleMenuItemClick} 
              >
                <Link to="/addbook">Add Book</Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                initial={{ x: 400 }}
                animate={{ x: 0 }}
                transition={{ duration: 1 }}
                className="text-white px-4 py-2 md:py-0"
                onClick={handleMenuItemClick}
              >
                <Link to="/addstudent">Add Student</Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                initial={{ x: 300 }}
                animate={{ x: 0 }}
                transition={{ duration: 1 }}
                className="text-white px-4 py-2 md:py-0"
                onClick={handleMenuItemClick}
              >
                <Link to="/dashboard">Dashboard</Link>
              </motion.div>
            </>
          )}

      
          {role === "" ? (
            <motion.div
              whileHover={{ scale: 1.1 }}
              initial={{ x: 200 }}
              animate={{ x: 0 }}
              transition={{ duration: 1 }}
              className="text-white px-4 py-2 md:py-0"
              onClick={handleMenuItemClick} 
            >
              <Link to="/login">Login</Link>
            </motion.div>
          ) : (
            <motion.div
              whileHover={{ scale: 1.1 }}
              initial={{ x: 100 }}
              animate={{ x: 0 }}
              transition={{ duration: 1 }}
              className="text-white px-4 py-2 md:py-0"
              onClick={handleMenuItemClick}
            >
              <Link to="/logout">Logout</Link>
            </motion.div>
          )}
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;
