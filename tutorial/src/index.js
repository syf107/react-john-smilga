import React from 'react';
import { createRoot } from 'react-dom/client';

// CSS
import './index.css';

const books = [
  {
    id: 1,
    img: 'https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL200_SR200,200_.jpg',
    title: 'I Love You to the Moon and Back',
    author: 'Amelia Hepworth',
  },

  {
    id: 2,
    img: 'https://images-na.ssl-images-amazon.com/images/I/912w0zCVe-L._AC_UL200_SR200,200_.jpg',
    title: 'Antiracist Baby Picture Book',
    author: 'Ibram X. Kendi',
  },
  {
    id: 3,
    img: 'https://images-na.ssl-images-amazon.com/images/I/91HHxxtA1wL._AC_UL302_SR302,200_.jpg',
    title: 'The Wonderful Things You Will Be',
    author: 'Emily Winfield Martin',
  },
];

const BookList = () => {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
};

const Book = ({ img, title, author }) => {
  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

createRoot(document.getElementById('root')).render(<BookList />);
