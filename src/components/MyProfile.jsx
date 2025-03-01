import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MyProfile.css';

const MyProfile = () => {
  const [profileData, setProfileData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Profile Updated:', profileData);
    // Handle profile update (e.g., send data to server)
  };

  return (
    <div className="profile-container">
      <div className="profile-tabs">
        <Link to="/profile" className="tab-link active">My Profile</Link>
        <Link to="/history" className="tab-link">Booking History</Link>
      </div>
      <form onSubmit={handleSubmit} className="profile-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={profileData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={profileData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={profileData.phoneNumber}
            onChange={handleChange}
            
          />
        </div>
        <button type="submit" className="submit-button">Update Profile</button>
      </form>
    </div>
  );
};

export default MyProfile;
