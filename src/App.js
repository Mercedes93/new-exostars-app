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
       <div className="button-container">
        <button className="stylish-button">Explore Exoplanets</button>
        <button className="stylish-button">View Star Charts</button>
        <button className="stylish-button">Settings</button>
	  </div>
    </div>
  );
}

export default App;

