import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
function Dashboard() {
  const [dashboardData, setdashboardData] = useState({
    tbooks: "",
    tadmin: "",
    tstudent: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:5001/dashboard`)
      .then((res) => {
        console.log(res)
        if (res.data.ok) {
          setdashboardData({
            tbooks: res.data.book,
            tadmin: res.data.admin,
            tstudent: res.data.student,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="pt-16 flex justify-center items-center min-h-screen bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{scale:1.2}}
          className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center"
        >
          <h2 className="text-xl font-semibold mb-2">Total Books</h2>
          <h3 className="text-2xl font-bold">{dashboardData.tbooks}</h3>{" "}
          {/* Replace with dynamic data */}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{scale:1.2}}
          className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center"
        >
          <h2 className="text-xl font-semibold mb-2">Total Students</h2>
          <h3 className="text-2xl font-bold">{dashboardData.tstudent}</h3>{" "}
          {/* Replace with dynamic data */}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{scale:1.2}}
          className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center"
        >
          <h2 className="text-xl font-semibold mb-2">Total Admins</h2>
          <h3 className="text-2xl font-bold">{dashboardData.tadmin}</h3>{" "}
          {/* Replace with dynamic data */}
        </motion.div>
      </div>
    </div>
  );
}

export default Dashboard;
