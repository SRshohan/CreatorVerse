import React from 'react';
import './CreatorForm.css'; // Import the CSS file for styling

function EditForm({ formData, setFormData, handleSubmit }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(formData); // Pass formData to the parent component's handler
  };

  return (
    <form onSubmit={onSubmit} className="creator-form">
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name || ''} // Ensure value is handled correctly
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>URL:</label>
        <input
          type="url"
          name="url"
          value={formData.url || ''} // Ensure value is handled correctly
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          name="description"
          value={formData.description || ''} // Ensure value is handled correctly
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Image URL:</label>
        <input
          type="url"
          name="imageURL"
          value={formData.imageURL || ''} // Ensure value is handled correctly
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn">Submit</button>
    </form>
  );
}

export default EditForm;