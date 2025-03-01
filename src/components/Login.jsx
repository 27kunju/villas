import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Remember Me:', rememberMe);
  };

  return (
    <div className="login-page">
      <h2>Welcome back!</h2>
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
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group remember-me">
          <input
            type="checkbox"
            id="remember-me"
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
          />
          <label className = "remember-me" htmlFor="remember-me">Remember me</label>
        </div>
        <div className="form-group forgot-password">
          <Link to="/forgot-password">Forgot password?</Link>
        </div>
        <button type="submit">Login</button>
      </form>
      <div className="signup-link">
        <span>Don't have an account?</span>
        <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  );
};
