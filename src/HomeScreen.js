// src/HomeScreen.js
import React from 'react';
import './styles/App.css';

const HomeScreen = ({ navigateTo }) => {
  return (
    <div className="home-screen">
      <header>Welcome to ExoStars</header>
      {/* Adding custom logo */}
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <img src="/logo.png" alt="ExoStars Logo" style={{ width: '150px', marginBottom: '20px' }} />
      </div>
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <button onClick={() => navigateTo('select')}>Select Exoplanet</button>
        <button onClick={() => navigateTo('chart')}>View Star Chart</button>
        <button onClick={() => navigateTo('settings')}>Settings</button>
      </div>
    </div>
  );
};

export default HomeScreen;

