import React from 'react';

const Button = ({ value, start }) => {
  return (
    <button className="button" onClick={start}>
      {value}
    </button>
  );
};

export default Button;
