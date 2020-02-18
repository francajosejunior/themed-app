import React from 'react';
import './styles.scss';

const Alert = ({ children, icon }) => {
  return (
    <div className="alert border-primary-opacity">
      <div className="alert-bar bg-secondary"></div>
      <div className="alert-label font-color-label">{children}</div>
      <div className="alert-icon">{icon}</div>
    </div>
  );
};

export default Alert;
