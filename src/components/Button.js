import React from 'react';

const Button = ({ value, onCalculate }) => {
  return (
    <div className="button-container">
      <button className="button" onClick={onCalculate}>
        {value}
      </button>
    </div>
  );
};

export default Button;
