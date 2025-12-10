import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import HomePage from './pages/HomePage';
import CharactersPage from './pages/CharactersPage';
import EpisodesPage from './pages/EpisodesPage';
import MusicPage from './pages/MusicPage';
import CreatorsPage from './pages/CreatorsPage';
import './styles/main.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/characters" element={<CharactersPage />} />
          <Route path="/episodes" element={<EpisodesPage />} />
          <Route path="/music" element={<MusicPage />} />
          <Route path="/creators" element={<CreatorsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;