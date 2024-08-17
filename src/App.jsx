import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Books from "./component/Books";
import Login from "./component/Login";
import Navbar from "./component/Navbar";
import Dashborad from "./component/Dashborad";
import AddStudent from "./component/AddStudent";
import Logout from "./component/Logout";
import axios from "axios";
import Addbook from "./component/Addbook";
import Editbook from "./component/Editbook";
import Deletebook from "./component/DeleteBook";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [role,setRole]=useState();
  console.log(role)
  useEffect(()=>{
    axios.defaults.withCredentials=true;
    axios.get('http://localhost:5001/auth/verify')
    .then(res=>{
      console.log(res)
      if(res.data.login){
        setRole(res.data.role)
      }
      else{
        setRole('')
      }
    }).catch(err=>console.log(err));
  },[])
  return (
    <>
      <ToastContainer/>
      <BrowserRouter>
        <Navbar role={role}/>
        <Routes>
          <Route path="/" element={<Home setRole={setRole}/>} />
          <Route path="/books" element={<Books role={role}/>}/>
          <Route path="/login" element={<Login setRole={setRole}/>} />
          <Route path="/dashboard" element={<Dashborad />} />
          <Route path="/addstudent" element={<AddStudent/>}/>
          <Route path="/logout" element={<Logout setRole={setRole}/>} />
          <Route path="/addbook" element={<Addbook/>}/>
          <Route path="/book/:id" element={<Editbook/>}/>
          <Route path="/delete/:id" element={<Deletebook/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
