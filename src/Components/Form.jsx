import React, { useState } from 'react';
import axios from 'axios';

function UserForm() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    birthday: '',
    occupation: '',
    city: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const validateForm = () => {
    let newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.age || isNaN(formData.age) || formData.age < 0) {
      newErrors.age = 'Please enter a valid age';
    }
    
    if (!formData.birthday) {
      newErrors.birthday = 'Birthday is required';
    }
    
    if (!formData.occupation.trim()) {
      newErrors.occupation = 'Occupation is required';
    }
    
    if (!formData.city.trim()) {
      newErrors.city = 'City is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      try {
        const response = await axios.post('https://api.example.com/user', formData);
        console.log('Form submitted successfully:', response.data);
        // Reset form or show success message
      } catch (error) {
        console.error('Error submitting form:', error);
        // Show error message to user
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>

      <div>
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
        {errors.age && <span className="error">{errors.age}</span>}
      </div>

      <div>
        <label htmlFor="birthday">Birthday:</label>
        <input
          type="date"
          id="birthday"
          name="birthday"
          value={formData.birthday}
          onChange={handleChange}
        />
        {errors.birthday && <span className="error">{errors.birthday}</span>}
      </div>

      <div>
        <label htmlFor="occupation">Occupation:</label>
        <input
          type="text"
          id="occupation"
          name="occupation"
          value={formData.occupation}
          onChange={handleChange}
        />
        {errors.occupation && <span className="error">{errors.occupation}</span>}
      </div>

      <div>
        <label htmlFor="city">City:</label>
        <input
          type="text"
          id="city"
          name="city"
          value={formData.city}
          onChange={handleChange}
        />
        {errors.city && <span className="error">{errors.city}</span>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default UserForm;