import React, { useState } from 'react';
// use
// component's name name must be uppercase
// must be in function / component's body
// cannot call conditionally.

const UseStateBasics = () => {
  // console.log(useState('hello world'));
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value, handler);
  const [text, setText] = useState('random title');

  const handleClick = () => {
    if (text === 'random title') {
      setText('Hello World!');
    } else {
      setText('random title');
    }
  };
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button type='button' className='btn' onClick={handleClick}>
        change the value
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
