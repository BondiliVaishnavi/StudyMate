import React, { useEffect, useState } from "react";
import './index.css';
import { CgProfile } from "react-icons/cg";
import { FiEdit3 } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [editMode, setEditMode] = useState(false); // to toggle edit/view
  const [formData, setFormData] = useState({}); 


  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/Login'); // Redirect if not logged in
        return;
      }

      try {
        const res = await fetch('http://localhost:5001/auth/me', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        const data = await res.json();

        if (res.ok) {
          setUser(data);
          setFormData(data); // pre-fill form for editing

        } else {
          setError(data.message || 'Failed to load user');
        }
      } catch (err) {
        setError('Server error');
      }
    };

    fetchUser();
  }, [navigate]);

  if (error) return <div>{error}</div>;
  if (!user) return <div>Loading...</div>;

  const handleSave = async () => {
  const token = localStorage.getItem('token');
  try {
    const res = await fetch('http://localhost:5001/auth/update-profile', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(formData)
    });

    const data = await res.json();
    if (res.ok) {
      alert('Profile updated successfully!');
      setUser(data.user);       // Update view data
      setEditMode(false);       // Exit edit mode
    } else {
      alert(data.message || 'Failed to update profile');
    }
  } catch (err) {
    alert('Server error. Try again later.');
  }
};


  return (
    <div className="profile-section">
      <CgProfile size={200} />
      <div className="profile-header">
        <h1>Edit Profile</h1>
        
          <button className="edit button" onClick={() => setEditMode(!editMode)}>
           {editMode ? "Cancel" : "Edit"}
            <FiEdit3 size={18} />
            Edit
          </button>
       
      </div>

      <div className="profile-field">
        <div className="profile-label">Name</div>
         {editMode ? (
         <input
           type="text"
           name="name"
          value={formData.name || ''}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
  />
) : (
  <div className="profile-value">{user.name}</div>
)}

      </div>

      <div className="profile-field">
        <div className="profile-label">University</div>
{editMode ? (
  <input
    type="text"
    name="college"
    value={formData.college || ''}
    onChange={(e) => setFormData({ ...formData, college: e.target.value })}
  />
) : (
  <div className="profile-value">{user.college}</div>
)}

      </div>

      <div className="profile-field">
        <div className="profile-label">Year of Study</div>
{editMode ? (
  <input
    type="text"
    name="year"
    value={formData.year || ''}
    onChange={(e) => setFormData({ ...formData, year: e.target.value })}
  />
) : (
  <div className="profile-value">{user.year}</div>
)}

      </div>

      <div className="profile-field">
        <div className="profile-label">Goal</div>
{editMode ? (
  <input
    type="text"
    name="goal"
    value={formData.goal || ''}
    onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
  />
) : (
  <div className="profile-value">{user.goal}</div>
)}

      </div>

      <div className="profile-field">
        <div className="profile-label">Partner Reference</div>
{editMode ? (
  <input
    type="text"
    name="partnerGoal"
    value={formData.partnerGoal || ''}
    onChange={(e) => setFormData({ ...formData, partnerGoal: e.target.value })}
  />
) : (
  <div className="profile-value">{user.partnerGoal}</div>
)}

      </div>

      <div className="profile-field">
        <Link to='/match'>
          <button type="button" className="match-button">Make match</button>
        </Link>
      </div>
            {editMode && (
  <button className="save-button" onClick={handleSave}>
    Save
  </button>
)}
    </div>
  );
};

export default Dashboard;
