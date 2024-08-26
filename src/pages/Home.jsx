import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';  // Importing the CSS file for styling

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to the Content Creator Hub</h1>
      <p>Discover, add, and manage your favorite content creators!</p>
      <div className="button-group">
        <Link to="/showcreators" className="btn">View Creators</Link>
        <Link to="/create-for" className="btn">Add New Creator</Link>
      </div>
    </div>
  );
}

export default Home;
