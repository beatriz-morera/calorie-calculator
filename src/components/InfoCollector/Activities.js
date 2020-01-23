import React, { useState } from 'react';

const Activities = ({ onChange }) => {
  const [active, setActive] = useState();
  const changeColorHandler = ev => {
    setActive(ev.target.id);
    onChange(ev.target.id);
  };
  return (
    <ul className="activities-list">
      <li
        id="1st"
        className={active === '1st' ? 'active-activity' : 'activities-items'}
        onClick={changeColorHandler}
      >
        <p className="activities-headline">Lightly active</p>Mostly sitting
        (e.g. office worker)
      </li>
      <li
        id="2nd"
        className={active === '2nd' ? 'active-activity' : 'activities-items'}
        onClick={changeColorHandler}
      >
        <p className="activities-headline">Moderately active</p>Mostly standing
        (e.g. teacher, cashier)
      </li>
      <li
        id="3rd"
        className={active === '3rd' ? 'active-activity' : 'activities-items'}
        onClick={changeColorHandler}
      >
        <p className="activities-headline">Active</p>Mostly walking (e.g. sales,
        server)
      </li>
      <li
        id="4th"
        className={active === '4th' ? 'active-activity' : 'activities-items'}
        onClick={changeColorHandler}
      >
        <p className="activities-headline">Very Active</p>Physically demanding
        job (e.g. builder)
      </li>
      <li
        id="5th"
        className={active === '5th' ? 'active-activity' : 'activities-items'}
        onClick={changeColorHandler}
      >
        <p className="activities-headline">Athlete</p>Powerful daily training
      </li>
    </ul>
  );
};

export default Activities;
