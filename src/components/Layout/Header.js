import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/main.css'

const Header = () => {
  return (
    <header>
      <h1>Cowboy Bebop Journal</h1>
      <nav className="nav-links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/characters">Characters</NavLink>
        <NavLink to="/episodes">Episodes</NavLink>
        <NavLink to="/music">Music</NavLink>
        <NavLink to="/creators">Creators</NavLink>
      </nav>
    </header>
  );
};

export default Header;