import React from 'react';
import CreatorForm from '../components/CreatorForm'; // Import your form component
import './AddCreator.css'; // Import the CSS file for styling

function CreateFor() {
  return (
    <div className="create-for-container">
      <h1>Create New Creator</h1>
      <CreatorForm />
    </div>
  );
}

export default CreateFor;


