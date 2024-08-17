import axios from 'axios';
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import {toast} from "react-toastify"
function DeleteBook() {
  const navigate=useNavigate();
  const {id}=useParams();
  useEffect(()=>{
    axios.delete(`http://localhost:5001/book/delete/${id}`)
    .then((res)=>{
        if(res.data.deleted){
            toast.success(res.data.message, {
                position: "top-center",
                autoClose: 1500,
              });
            navigate('/books');
        }
    })

    .catch((err)=>{
        console.log(err);
    })
 },[])
}

export default DeleteBook
