import React, { useState } from 'react';
import './login.css';

const Login = () => {
  // State to store form data and any error messages
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!email || !password) {
      setError('Please fill in both fields.');
      return;
    }

    // If validation passes, handle login logic here (e.g., API call)
    setError('');
    console.log('Logged in with:', { email, password });
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>

        {/* Error message */}
        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="login-btn">Login</button>
        </form>

        <div className="signup-link">
          Don't have an account? <a href="/signup">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
