import React, { useState } from 'react';
import axios from 'axios';

function RegisterForm() {
  const [fname, setFirstName] = useState('');
  const [lname, setLastName] = useState('');
  const [user, setUsername] = useState('');
  const [pwd, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validation for special characters in first name and last name
    const nameRegex = /^[a-zA-Z]+$/;
    if (!nameRegex.test(fname)) {
      setError('First name can only contain letters.');
      return;
    }
  
    if (!nameRegex.test(lname)) {
      setError('Last name can only contain letters.');
      return;
    }
  
    // Validation for special characters in username
    const usernameRegex = /^[a-zA-Z0-9_]+$/;
    if (!usernameRegex.test(user)) {
      setError('Username can only contain letters, numbers, and underscores.');
      return;
    }

    try {
      const response = await axios.post('https://paneka-backend.onrender.com/register', { firstname: fname, lastname: lname, username: user, password: pwd });
      console.log(response.data);
      // Handle successful registration, e.g., redirect to login page
    } catch (error) {
      console.error('Registration failed:', error.response.data.message);
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <div className='loginPage'>
      <h2 className='loginHeader'>Register</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={fname}
            onChange={handleFirstNameChange}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lname}
            onChange={handleLastNameChange}
          />
        </div>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={user}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={pwd}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegisterForm;
