import React from 'react';
import { createRoot } from 'react-dom/client';

// CSS
import './index.css';

// setup vars
const firstBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL200_SR200,200_.jpg',
  title: 'I Love You to the Moon and Back',
  author: 'Amelia Hepworth',
};

const secondBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/912w0zCVe-L._AC_UL200_SR200,200_.jpg',
  title: 'Antiracist Baby Picture Book',
  author: 'Ibram X. Kendi',
};

const BookList = () => {
  return (
    <section className='booklist'>
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
};

const Book = ({ img, title, author }) => {
  // const { img, title, author } = props;
  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

createRoot(document.getElementById('root')).render(<BookList />);

// import React from 'react';
// import ReactDom from 'react-dom';

// // stateless functional component
// // always return jsx
// function Greeting() {
//   return (
//     <div>
//       <h1>Hello world!</h1>
//     </div>
//   );
// }

// // const Greeting = () => {
// //   return React.createElement(
// //     'div',
// //     {},
// //     React.createElement('h1', {}, 'hello world')
// //   );
// // };

// ReactDom.render(<Greeting />, document.getElementById('root'));

// import React from 'react';
// import ReactDom from 'react-dom';

// // JSX Rules
// // Return single element
// // div / section / article or Fragment
// // use camelCase for html attribute.
// // className instaed of class
// // close every element
// // formatting

// const Greeting = () => {
//   return (
//     <React.Fragment>
//       <div>
//         <h3>hello people!</h3>
//         <ul>
//           <li href='#'>hello world</li>
//         </ul>
//       </div>
//       <div></div>
//     </React.Fragment>
//   );
// };

// ReactDom.render(<Greeting />, document.getElementById('root'));

// import React from 'react';
// import ReactDom from 'react-dom';

// // Nested Components, React Tools.

// const Greeting = () => {
//   return (
//     <div>
//       <Person />
//       <Message />
//     </div>
//   );
// };

// const Person = () => <h1>John Doe</h1>;
// const Message = () => {
//   return <p>This is my message.</p>;
// };

// ReactDom.render(<Greeting />, document.getElementById('root'));
