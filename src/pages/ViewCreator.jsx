import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../client'; // Import your Supabase client
import './ViewCreator.css'; // Import the CSS file for styling

function ViewCreator() {
  const { id } = useParams();
  const [creator, setCreator] = useState(null);

  useEffect(() => {
    // Fetch creator details from Supabase when the component mounts
    const fetchCreator = async () => {
      const { data, error } = await supabase
        .from('creators')
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        console.error('Error fetching creator:', error);
      } else {
        setCreator(data);
      }
    };

    fetchCreator();
  }, [id]);

  if (!creator) return <p>Loading...</p>;

  return (
    <div className="view-creator-container">
      <h1>{creator.name}</h1>
      {creator.imageURL && (
        <img
          src={creator.imageURL}
          alt={creator.name}
          className="creator-image"
        />
      )}
      <p>{creator.description}</p>
      <a href={creator.url} target="_blank" rel="noopener noreferrer">
        Visit Creator's Page
      </a>
      <div className="action-buttons">
        <Link to={`/editcreator/${creator.id}`} className="btn">Edit Creator</Link>
        <Link to={`/deletecreator/${creator.id}`} className="btn btn-delete">Delete Creator</Link>
      </div>
    </div>
  );
}

export default ViewCreator;

