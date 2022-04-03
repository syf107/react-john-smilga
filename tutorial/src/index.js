import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

// Nested Components, React Tools.

const BookList = () => {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => {
  return (
    <img
      src='https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL200_SR200,200_.jpg'
      alt=''
    />
  );
};

const Title = () => <h1>I Love You to the Moon and Back</h1>;
const Author = () => <h4>Amelia Hepworth</h4>;

ReactDom.render(<BookList />, document.getElementById('root'));

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
