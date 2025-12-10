import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/characters.css';

const CharactersPage = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCharacters();
  }, []);

  const fetchCharacters = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/characters');
      setCharacters(response.data);
      setError(null);
    } catch (error) {
      console.error('Error fetching characters:', error);
      setError('Failed to load characters. Please try again later.');
      setCharacters([]);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="loading">Loading characters...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  const characterPositions = [
    { top: '0%', left: '50%', transform: 'translateX(-50%)' },    // Spike - top
    { top: '25%', left: '0%', transform: 'translateY(-50%)' },    // Jet - left
    { top: '25%', right: '0%', transform: 'translateY(-50%)' },   // Faye - right
    { bottom: '0%', left: '50%', transform: 'translateX(-50%)' }, // Ed & Ein - bottom
  ];

  // Safely get main characters
  const mainCharacters = characters.slice(0, 4);

  return (
    <main className="character-page">
      <div className="character-hub">
        {/* Central group photo */}
        <div className="central-character">
          <img 
            src="https://i.ibb.co/jPSDLJf2/the-gang.jpg" 
            alt="Bebop Crew Group Photo" 
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://i.ibb.co/jPSDLJf2/the-gang.jpg";
            }}
          />
          <h2>The Bebop Crew</h2>
          <p>Spike, Jet, Faye, Ed, and Ein together on their adventures.</p>
        </div>

        {/* Surrounding characters */}
        {mainCharacters.map((character, index) => {
          // Use the correct property names from backend
          const characterId = character?.id || index;
          const characterName = character?.name || 'Unknown Character';
          const firstName = characterName?.split(' ')[0] || characterName;
          const description = character?.description || 'No description available.';
          
          // Handle image URL - check if it's a full URL or relative path
          const imageUrl = character?.image_url;
          const imageSrc = imageUrl?.startsWith('http') 
            ? imageUrl  // Use full URL as-is
            : `/images/${imageUrl || 'default.jpg'}`; // Prepend /images/ for relative paths

          return (
            <div 
              key={characterId} 
              className="character-box"
              style={characterPositions[index] || {}}
            >
              <input 
                type="checkbox" 
                id={`desc-${characterId}`}
                className="toggle-desc"
              />
              <label htmlFor={`desc-${characterId}`} className="character-label">
                <img 
                  src={imageSrc}
                  alt={characterName}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/images/default.jpg";
                  }}
                />
                <h3>{firstName}</h3>
              </label>
              <div className="description">
                <p>{description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default CharactersPage;