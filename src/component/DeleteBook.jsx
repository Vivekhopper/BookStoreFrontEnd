import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

function DeleteBook() {
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const confirmAndDeleteBook = async () => {
      try {
        // Show confirmation dialog
        const result = await MySwal.fire({
          title: 'Are you sure?',
          text: 'Do you want to delete this book?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes, delete it!',
          cancelButtonText: 'No, cancel!',
        });

        if (result.isConfirmed) {
          // Proceed with deletion
          const res = await axios.delete(`http://localhost:5001/book/delete/${id}`);
          
          if (res.data.deleted) {
            MySwal.fire({
              title: 'Deleted!',
              text: res.data.message,
              icon: 'success',
              confirmButtonText: 'OK',
            });
            navigate('/books');
          } else {
            MySwal.fire({
              title: 'Failed!',
              text: 'Failed to delete the book.',
              icon: 'error',
              confirmButtonText: 'OK',
            });
          }
        }
      } catch (err) {
        console.error(err);
        MySwal.fire({
          title: 'Error!',
          text: 'An error occurred while deleting the book.',
          icon: 'error',
          confirmButtonText: 'OK',
        });
      }
    };

    confirmAndDeleteBook();
  }, [id, navigate]);

  return null; // No UI to render since this is just for deleting a book
}

export default DeleteBook;
