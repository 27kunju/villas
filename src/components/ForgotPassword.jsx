import React, { useState } from 'react';
import './ForgotPassword.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle forgot password logic here
    console.log('Email:', email);
    setSubmitted(true);
  };

  return (
    <div className="forgot-password-page">
      <h2>Forgot Password</h2>
      {submitted ? (
        <p>A password reset link has been sent to your email.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit">Send Reset Link</button>
        </form>
      )}
    </div>
  );
};

export default ForgotPassword;
