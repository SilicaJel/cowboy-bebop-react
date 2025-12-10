import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/episodes.css';

const EpisodesPage = () => {
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEpisodes();
  }, []);

  const fetchEpisodes = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/episodes');
      setEpisodes(response.data);
    } catch (error) {
      console.error('Error fetching episodes:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="loading">Loading episodes...</div>;
  }

  return (
    <main className="episodes-page">
      <section className="episode-list">
        {episodes.map(episode => (
          <div key={episode.id} className="episode-card">
            <img 
              src={`/images/${episode.image_file}`} 
              alt={episode.episode_name} 
            />
            <div className="episode-info">
              <h2>Episode {episode.episode_number}: {episode.episode_name}</h2>
              <p>{episode.description}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default EpisodesPage;