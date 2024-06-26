import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    identificationType: '',
    identificationNumber: '',
    lastName: '',
    firstName: '',
    userType: '',
    gender: '',
    address: '',
    phoneNumber: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api-auth/register/', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      // Handle response as needed
      console.log(response.data);
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Username:</label>
          <input 
            type="text" 
            name="username" 
            className="form-control" 
            value={formData.username} 
            onChange={handleChange} 
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password:</label>
          <input 
            type="password" 
            name="password" 
            className="form-control" 
            value={formData.password} 
            onChange={handleChange} 
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Identification Type:</label>
          <input 
            type="text" 
            name="identificationType" 
            className="form-control" 
            value={formData.identificationType} 
            onChange={handleChange} 
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Identification Number:</label>
          <input 
            type="text" 
            name="identificationNumber" 
            className="form-control" 
            value={formData.identificationNumber} 
            onChange={handleChange} 
          />
        </div>
        <div className="mb-3">
          <label className="form-label">First Name:</label>
          <input 
            type="text" 
            name="firstName" 
            className="form-control" 
            value={formData.firstName} 
            onChange={handleChange} 
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Last Name:</label>
          <input 
            type="text" 
            name="lastName" 
            className="form-control" 
            value={formData.lastName} 
            onChange={handleChange} 
          />
        </div>
        <div className="mb-3">
          <label className="form-label">User Type:</label>
          <input 
            type="text" 
            name="userType" 
            className="form-control" 
            value={formData.userType} 
            onChange={handleChange} 
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Gender:</label>
          <input 
            type="text" 
            name="gender" 
            className="form-control" 
            value={formData.gender} 
            onChange={handleChange} 
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Address:</label>
          <input 
            type="text" 
            name="address" 
            className="form-control" 
            value={formData.address} 
            onChange={handleChange} 
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone Number:</label>
          <input 
            type="text" 
            name="phoneNumber" 
            className="form-control" 
            value={formData.phoneNumber} 
            onChange={handleChange} 
          />
        </div>
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;
