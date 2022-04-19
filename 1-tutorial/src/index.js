import React from 'react';
import { createRoot } from 'react-dom/client';

// CSS
import './index.css';
import { books } from './books';
import Book from './Book';

const BookList = () => {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
};

createRoot(document.getElementById('root')).render(<BookList />);
