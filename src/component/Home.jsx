import React from 'react';
import { motion } from 'framer-motion';

function Home() {
  return (
    <div className="flex flex-col md:flex-row h-screen p-4 md:p-10 gap-6 md:gap-12">
     
      <div className="flex-1 flex items-center justify-center p-4 md:p-10 mt-8 md:mt-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center max-w-md md:max-w-lg"
        >
          <h1 className="text-2xl md:text-4xl font-bold mb-4">Welcome to Book Store</h1>
          <p className="text-base md:text-lg">
            Discover your next favorite book with us! Browse our extensive collection and find the perfect read for every mood.
          </p>
        </motion.div>
      </div>

      <div
        className="flex-1 bg-cover bg-center bg-no-repeat h-64 md:h-auto"
        style={{ backgroundImage: "url('image.png')" }}
      >

      </div>
    </div>
  );
}

export default Home;
