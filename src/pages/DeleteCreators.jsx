import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../client'; // Import your Supabase client

function DeleteCreator() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = async () => {
    const { data, error } = await supabase
      .from('creators')
      .delete()
      .eq('id', id);

      if (error) {
        toast.error('Error deleting creator.');
        console.error('Error deleting creator:', error);
      } else {
        toast.success('Creator deleted successfully!');
        navigate('/creators');
      }
  };

  return (
    <div className="delete-creator-container">
      <h1>Confirm Deletion</h1>
      <p>Are you sure you want to delete this creator?</p>
      <button onClick={handleDelete} className="btn btn-delete">Delete</button>
      <button onClick={() => navigate(-1)} className="btn">Cancel</button>
    </div>
  );
}

export default DeleteCreator;
