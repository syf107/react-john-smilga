import React from 'react';

const Book = ({ img, title, author }) => {
  // attribute, eventHandler.
  // onClick, onMouseOver.

  //   const complexExample = (author) => {
  //     console.log(author);
  //   };

  return (
    <article onMouseOver={() => console.log(title)} className='book'>
      <img src={img} alt='' />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

export default Book;
