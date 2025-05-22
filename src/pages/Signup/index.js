import React, { useState } from "react";
import "./index.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
  email: '',
  password: '',
  college: '',
  branch: '',
  year: '',
  interests: '',
  goal: '',
  partnerGoal: '',
  linkedin: '',
  });
const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  
  // if (!formData.email.includes('@')) {
  //   setMessage('Invalid email address');
  //   return;
  // }
  // if (formData.password.length < 6) {
  //   setMessage('Password must be at least 6 characters long');
  //   return;
  // }
  
  try {
    const res = await axios.post('http://localhost:5001/auth/signup', formData);
    setMessage(res.data.message);
  } catch (err) {
    setMessage(err.response?.data?.message || 'Something went wrong');
  }
};

  return (
    
      <div className="Signup-page">
        <form  onSubmit={handleSubmit}>
        <div className="form-section">
          <h2>Basic Info</h2>

          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name" name="name"  value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"  value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"  value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-section">
          <h2>Academic Info</h2>
          <label htmlFor="college">College/University</label>
          <input
  type="text"
  id="college"
  name="college"
  value={formData.college}
  onChange={handleChange}
  required
/>

          <label htmlFor="branch">Department</label>
          <input
  type="text"
  id="branch"
  name="branch"
  value={formData.branch}
  onChange={handleChange}
  required
/>

          <label htmlFor="year">Year of Study</label>
          <select
  id="year"
  name="year"
  value={formData.year}
  onChange={handleChange}
  required
>
            <option value="">Select year</option>
            <option>First year</option>
            <option>Second year</option>
            <option>Third year</option>
            <option>Final year</option>
          </select>

          <label htmlFor="interests">Study Interests (comma separated)</label>
         <input
  type="text"
  id="interests"
  name="interests"
  value={formData.interests}
  onChange={handleChange}
/>
        </div>

        <div className="form-section">
          <h2>Skills & Goals</h2>

          <label htmlFor="goal">Your Current Goal</label>
          <input
            type="text"
            id="goal"
            name="goal"
  value={formData.goal}
  onChange={handleChange}
            placeholder="e.g., Preparing for GATE"
          />

          <label htmlFor="partnerGoal">Looking for Partner who is also</label>
          <input
            type="text"
            id="partnerGoal"
            name="partnerGoal"
  value={formData.partnerGoal}
  onChange={handleChange}
            placeholder="e.g., Preparing for GATE"
          />

          <label htmlFor="linkedin">LinkedIn URL</label>
          <input
            type="url"
            id="linkedin"
            name="linkedin"
  value={formData.linkedin}
  onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Create Account</button>

        <center>
          <p className="login-link">
            Already have an account? <a href="/Login">Login</a>
          </p>
        </center>
        </form>
        <p>{message}</p>
      </div>
    
    
  );
};

export default Signup;
