import React from 'react';

const Result = ({ calories, value }) => {
  return (
    <div className="result-info">
      <p className="result-description-1">{calories}</p>
      <p className="result-description-2">Calorie intake per day</p>
      <p className="result-description-3">{value}</p>
    </div>
  );
};

export default Result;
