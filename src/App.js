import React from 'react';
import Routes from './Routes';
import { getTheme } from './services/environmentServices';

function App() {
  return (
    <div className={`app-container ${getTheme()}`}>
      <Routes />
    </div>
  );
}

export default App;
