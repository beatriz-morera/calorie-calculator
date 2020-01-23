import React, { useState, useEffect } from 'react';
import Step from './Step';
import Gender from './Gender';
import Input from './Input';
import Activities from './Activities';
import Button from '../Button';

const StepContainer = ({ onChange, onCalculate }) => {
  const [state, setState] = useState({});

  useEffect(() => {
    if (onChange) {
      onChange(state);
    }
  }, [state, onChange]);

  const onChangeHandler = name => value =>
    setState(old => ({ ...old, [name]: value }));

  return (
    <div className="step-container">
      <p className="step-container-instructions">
        For accurate calculation, we need some basic info about you
      </p>
      <Step value={1} title={'You are'} />
      <Gender onChange={onChangeHandler('gender')} />
      <Step value={2} title={'How old are you?'} />
      <Input value={21} unit={'Years'} onChange={onChangeHandler('age')} />
      <Step value={3} title={'How tall are you?'} />
      <Input value={170} unit={'cm'} onChange={onChangeHandler('height')} />
      <Step value={4} title={'How much do you weigh?'} />
      <Input value={69} unit={'kg'} onChange={onChangeHandler('weight')} />
      <Step value={5} title={'How active are you on daily basis?'} />
      <Activities onChange={onChangeHandler('activity')} />
      <Button
        value={'Calculate your needed calorie intake'}
        start={onCalculate}
      />
    </div>
  );
};

export default StepContainer;
