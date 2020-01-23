import React, { useState } from 'react';

const Gender = ({ onChange }) => {
  const [active, setActive] = useState();
  const changeColorHandler = ev => {
    setActive(ev.target.innerText);
    onChange(ev.target.innerText);
  };
  return (
    <ul className="gender-list">
      <li
        className={active === 'MALE' ? 'active' : 'gender-options'}
        onClick={changeColorHandler}
      >
        MALE
      </li>
      <li
        className={active === 'FEMALE' ? 'female-active' : 'gender-options'}
        onClick={changeColorHandler}
      >
        FEMALE
      </li>
    </ul>
  );
};

export default Gender;
