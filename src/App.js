import React, { useState } from 'react';

import StepContainer from './components/InfoCollector/StepContainer';
import Button from './components/Button';
import Step from './components/InfoCollector/Step';
import Result from './components/Result';

import { calculator } from './calculator';
import { Switch } from 'antd';

const App = () => {
  const [calories, setCalories] = useState('...');
  const [result, setResult] = useState({});
  const [darkMode, setDarkMode] = useState(false);
  return (
    <main className={darkMode ? 'dark-mode' : ''}>
      <div className="main-title">
        <Switch onChange={setDarkMode} />
        <p>Daily Calorie Intake Calculator</p>
      </div>
      <StepContainer onChange={setResult} />
      <Button
        value={'Calculate your needed calorie intake'}
        onCalculate={() => setCalories(calculator(result))}
      />
      <p className="text-result">Your personal result</p>
      <Step value={'?'} />
      <p className="result-headline">Lose weight</p>
      <Result
        calories={typeof calories === 'number' ? calories - 500 : calories}
        value={
          'This range of daily calories will enable you to lose 0.5 kg per week.'
        }
      />
      <p className="result-headline">Maintain weight</p>
      <Result
        calories={calories}
        value={
          'This range of daily calories will enable you to maintain your current weight.'
        }
      />
      <p className="result-headline">Gain weight</p>
      <Result
        calories={typeof calories === 'number' ? calories + 500 : calories}
        value="This range of daily calories will enable you to gain 0.5 kg per week."
      />
    </main>
  );
};

export default App;
