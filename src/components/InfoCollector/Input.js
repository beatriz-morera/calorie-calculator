import React, { useState } from 'react';

const Input = ({ value, unit, onChange }) => {
  const [, setInfo] = useState('');
  const changeInfoHandler = ev => {
    setInfo(ev.target.value);
    onChange(parseInt(ev.target.value));
  };
  return (
    <div className="input-container">
      <input
        className="input"
        maxLength="3"
        placeholder={value}
        onBlur={changeInfoHandler}
      ></input>
      <p>{unit}</p>
    </div>
  );
};

export default Input;
