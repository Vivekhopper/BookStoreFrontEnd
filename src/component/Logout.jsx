import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

function Logout({ setRole }) {
  const navigate = useNavigate();

  useEffect(() => {
    MySwal.fire({
      title: 'Are you sure?',
      text: 'Do you really want to log out?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, log me out!',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        axios.get('http://localhost:5001/auth/logout')
          .then((res) => {
            if (res.data.logout) {
              MySwal.fire({
                title: 'Logged Out!',
                text: res.data.message,
                icon: 'success',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'OK',
              }).then(() => {
                setRole('');
                navigate('/');
              });
            }
          })
          .catch((err) => {
            MySwal.fire({
              title: 'Error!',
              text: 'An error occurred during logout',
              icon: 'error',
              confirmButtonColor: '#d33',
              confirmButtonText: 'OK',
            });
            console.log(err);
          });
      } else {
        navigate('/dashboard');
      }
    });
  }, [navigate, setRole]);

  return null; // No UI to render since this is just for logout
}

export default Logout;
