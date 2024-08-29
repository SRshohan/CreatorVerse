import React from 'react';
import './CreatorForm.css'; 

function EditForm({ formData, setFormData, handleSubmit }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(formData); // Passing formData to the parent component's handler
  };

  return (
    <form onSubmit={onSubmit} className="creator-form">
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name || ''} 
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>URL:</label>
        <input
          type="url"
          name="url"
          value={formData.url || ''} 
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          name="description"
          value={formData.description || ''} 
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Image URL:</label>
        <input
          type="url"
          name="imageURL"
          value={formData.imageURL || ''} 
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn">Submit</button>
    </form>
  );
}

export default EditForm;