import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faRightFromBracket, faClockRotateLeft } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css'; // Create and import this CSS file

const Navbar = () => {
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const profileMenuRef = useRef(null);

  const toggleProfileDropdown = () => {
    setProfileDropdownOpen(!profileDropdownOpen);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setProfileDropdownOpen(false);
  };

  const handleClickOutside = (event) => {
    if (profileMenuRef.current && !profileMenuRef.current.contains(event.target)) {
      setProfileDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h3>Villas</h3>
      </div>
      <div className='navbar-right'>
        <ul className="navbar-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="navbar-user">
          {!isLoggedIn ? (
            <Link to="/login" className="login-button">
              <FontAwesomeIcon icon="fa-light fa-user" />
              <span>Login</span>
            </Link>
          ) : (
            <div className="profile-menu" ref={profileMenuRef}>
              <div className="profile-button" onClick={toggleProfileDropdown}>
                <FontAwesomeIcon icon={faUser} />
                <span>My Account</span>
              </div>
              {profileDropdownOpen && (
                <div className="profile-dropdown">
                  <Link to="/profile" className="profile-item">
                    <FontAwesomeIcon className='icon-txt' icon={faUser} />
                    <span className='icon-txt'>My Profile</span>
                  </Link>
                  <Link to="/history" className="profile-item">
                    <FontAwesomeIcon className='icon-txt' icon={faClockRotateLeft} />
                    <span className='icon-txt'>Booking History</span>
                  </Link>
                  <div className="profile-item" onClick={handleLogout}>
                    <FontAwesomeIcon icon={faRightFromBracket} />
                    <span>Logout</span>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
