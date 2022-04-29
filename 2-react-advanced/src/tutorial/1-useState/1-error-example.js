import React from 'react';

const ErrorExample = () => {
  let title = 'random title';

  const handleClick = () => {
    title = 'hello people';
    console.log(title);
  };
  return (
    <React.Fragment>
      <h1>{title}</h1>
      <button type='button' className='btn' onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
