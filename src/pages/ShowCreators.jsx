import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../client'; // Import your Supabase client
import './ShowCreators.css'; // Import the CSS file for styling

function ShowCreators() {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    // Fetch all creators from Supabase
    const fetchCreators = async () => {
      const { data, error } = await supabase
        .from('creators')
        .select('*');

      if (error) {
        console.error('Error fetching creators:', error);
      } else {
        setCreators(data);
      }
    };

    fetchCreators();
  }, []);

  return (
    <div className="show-creators-container">
      <h1>All Content Creators</h1>
      <div className="creator-cards">
        {creators.map((creator) => (
          <div key={creator.id} className="creator-card">
            {creator.imageURL && (
              <img
                src={creator.imageURL}
                alt={creator.name}
                className="creator-image"
              />
            )}
            <h2>{creator.name}</h2>
            <p>{creator.description}</p>
            <Link to={`/viewcreator/${creator.id}`} className="btn">View Profile</Link>
            <div className="card-buttons">
              <Link to={`/editcreator/${creator.id}`} className="btn btn-edit">Edit</Link>
              <Link to={`/deletecreator/${creator.id}`} className="btn btn-delete">Delete</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShowCreators;
