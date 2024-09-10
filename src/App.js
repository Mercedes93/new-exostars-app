// src/App.js
import React, { useState } from 'react';
import './styles/App.css';
import HomeScreen from './HomeScreen';
import SelectExoplanet from './SelectExoplanet';
import StarChartViewer from './StarChartViewer';
import Settings from './Settings';

function App() {
  const [screen, setScreen] = useState('home');

  const navigateTo = (screenName) => {
    setScreen(screenName);
  };

  return (
    <div className="App">
      {screen === 'home' && <HomeScreen navigateTo={navigateTo} />}
      {screen === 'select' && <SelectExoplanet />}
      {screen === 'chart' && <StarChartViewer />}
      {screen === 'settings' && <Settings />}
    </div>
  );
}

export default App;

