import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../client'; // Import your Supabase client
import CreatorForm from '../components/CreatorForm'; // Reuse the form component
import './EditCreator.css'; // Import the CSS file for styling
import { toast } from 'react-toastify';

function EditCreator() {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: '',
    url: '',
    description: '',
    imageURL: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch creator details for editing
    const fetchCreator = async () => {
      const { data, error } = await supabase
        .from('creators')
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        console.error('Error fetching creator:', error);
      } else {
        setFormData(data);
      }
    };

    fetchCreator();
  }, [id]);

  const handleSubmit = async (updatedData) => {
    const { data, error } = await supabase
      .from('creators')
      .update(updatedData)
      .eq('id', id);

    if (error) {
      toast.error('Error updating creator.')
      console.error('Error updating creator:', error);
    } else {
      toast.success('Creator updated successfully!');
      console.log('Success:', data);
      navigate(`/showcreators`); // Redirect after updating
    }
  };

  return (
    <div className="edit-creator-container">
      <h1>Edit Creator</h1>
      <CreatorForm
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default EditCreator;



