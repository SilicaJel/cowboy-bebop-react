import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/music.css';

const MusicPage = () => {
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMusic();
  }, []);

  const fetchMusic = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/music');
      setTracks(response.data);
    } catch (error) {
      console.error('Error fetching music:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="loading">Loading music...</div>;
  }

  const album = {
    name: "Cowboy Bebop OST 1: Tank!",
    composer: "Yoko Kanno & The Seatbelts",
    year: "1998",
    description: "The first official soundtrack for Cowboy Bebop, blending bebop jazz, blues, funk, and swing into a soundscape as bold as the series itself. 'Tank!' remains one of the most recognized anime openings in history — energetic, stylish, and timeless."
  };

  return (
    <main className="music-page">
      <div className="music-container">
        <section className="album-section">
          <div className="album-header">
            <div className="album-cover-box">
              <img 
                src="https://i.ibb.co/k6BFTN2n/album-cover.jpg" 
                alt="Cowboy Bebop OST 1 - Tank!" 
                className="album-cover" 
              />
            </div>

            <div className="album-info">
              <h2>Cowboy Bebop OST 1: <span className="album-title">Tank!</span></h2>
              <p className="album-meta"><em>Composer: {album.composer} | Released: {album.year}</em></p>
              <p className="album-description">{album.description}</p>
            </div>
          </div>

          <div className="tracklist-section">
            <div className="tracklist-container">
              <h3>Track List</h3>
              <ul className="tracklist">
                {tracks.slice(0, 8).map((track, index) => (
                  <li key={track.id || index} className="track-item">
                    <span className="track-number">{index + 1}.</span>
                    <span className="track-name">{track.track_name}</span>
                    <span className="track-duration">{track.duration}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default MusicPage;