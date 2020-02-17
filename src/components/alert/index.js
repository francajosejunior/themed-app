import React from 'react';
import './styles.scss';

const Alert = ({ children, icon }) => {
  return (
    <div className="alert border-primary">
      <div className="alert-bar bg-secondary"></div>
      <div className="font-color-label">{children}</div>
      <div className="alert-icon">{icon}</div>
    </div>
  );
};

export default Alert;
