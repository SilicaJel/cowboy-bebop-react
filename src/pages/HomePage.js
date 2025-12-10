import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';

const HomePage = () => {
  return (
    <main className="landing-container">
      <div className="hero-wrapper">
        <img src="https://i.ibb.co/bjmSFZJX/Spike.jpg" alt="Cowboy Bebop" className="hero-image" />
        
        <div className="hero-buttons">
          <Link to="/characters">Characters</Link>
          <Link to="/episodes">Episodes</Link>
          <Link to="/music">Music</Link>
          <Link to="/creators">Creators</Link>
        </div>
      </div>
    </main>
  );
};

export default HomePage;