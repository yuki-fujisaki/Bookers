'use client'

import { useState, useEffect } from 'react';

interface Book {
    id: string;
    title: string;
    body: string;
  }

const BooksList = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    async function fetchBooks() {
      try {
        const response = await fetch('http://localhost:8888/books');
        const data = await response.json();
        setBooks(data);
        console.log(data);
      } catch (error) {
        console.error('データの取得に失敗しました', error);
      }
    }
    fetchBooks();
  }, []);

  return (
    <div>
      <h1>Books List</h1>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <h2>{book.title}</h2>
            <p>{book.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BooksList;
