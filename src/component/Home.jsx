import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
function Home() {
  
  return (
    <div className="flex h-screen p-28 gap-6 justify-around">
      <div className="flex-1 flex items-center justify-around p-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center "
        >
          <h1 className="text-4xl font-bold mb-4">Welcome to Book Store</h1>
          <p className="text-lg">Discover your next favorite book with us! Browse our extensive collection and find the perfect read for every mood.</p>
        </motion.div>
      </div>
      <div 
        className="flex-1 bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: "url('image.png')" }}
      >
      </div>
    </div>
  );
}

export default Home;
