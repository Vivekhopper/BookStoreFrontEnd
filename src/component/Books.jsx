import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Bookscard from './Bookscard';

function Books({role}) {
  const [books, setBooks] = useState([]);
  // console.log(role)
  useEffect(() => {
    axios.get("http://localhost:5001/book/books")
      .then((res) => {
        setBooks(res.data);
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className="p-4">
      {books.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pl-20">
          {books.map(book => (
            <Bookscard book={book} key={book._id} role={role}/> // Note the use of `key={book._id}`
          ))}
        </div>
      ) : (
        <p>No books available.</p>
      )}
    </div>
  );
}

export default Books;
