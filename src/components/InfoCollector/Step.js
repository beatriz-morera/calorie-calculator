import React from 'react';

const Step = ({ value, title }) => {
  return (
    <div className="calculator-step-container">
      <div className="calculator-step">
        <div className="separator-line">
          <div className="separator-icon-container">
            <span className="separator-low-text-number">{value}</span>
            <p className="step-title">{title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step;
