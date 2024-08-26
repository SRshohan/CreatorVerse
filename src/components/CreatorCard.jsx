import React from 'react';
import { Link } from 'react-router-dom';

function CreatorCard({ creator }) {
  return (
    <div className="card">
      <h2>{creator.name}</h2>
      <p>{creator.description}</p>
      {creator.imageURL && <img src={creator.imageURL} alt={creator.name} />}
      <Link to={`/creators/${creator.id}`}>
        <button className="btn">View Details</button>
      </Link>
    </div>
  );
}

export default CreatorCard;

