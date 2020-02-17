import React from 'react';
import UserLevel from '../userLevel';
import './styles.scss';
import Productivity from '../productivity';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <UserLevel />
      <div className="productivity-simulator-wrapper">
        <div className="productivity">
          <Productivity />
        </div>
        <div className="simulator"></div>
      </div>
    </div>
  );
};

export default Dashboard;
