import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/creators.css';

const CreatorsPage = () => {
  const [creators, setCreators] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCreators();
  }, []);

  const fetchCreators = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/creators');
      setCreators(response.data);
    } catch (error) {
      console.error('Error fetching creators:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="loading">Loading creators...</div>;
  }

  return (
    <main className="creators-page">
      {creators.map(creator => {
        // Use the actual data from API response
        const imageSrc = creator.photo_image;
        
        return (
          <section key={creator.id} className="creator-card">
            {imageSrc && (
              <img 
                src={imageSrc.startsWith('http') ? imageSrc : `/images/${imageSrc}`}
                alt={creator.creator_name} 
                className="creator-photo" 
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/images/default.jpg";
                }}
              />
            )}
            <div className="creator-info">
              <h2>{creator.creator_name}</h2>
              <p>
                <strong>{creator.role}</strong><br />
                {creator.description}
              </p>
            </div>
          </section>
        );
      })}
    </main>
  );
};

export default CreatorsPage;