import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import axios from 'axios';

function SignupForm() {
  // State to manage form input values and validation
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState(''); 
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  axios.defaults.withCredentials = true;
  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://collab-learn-server.vercel.app/register', { name, email, password, role })
      .then(result => {
        console.log(result);
        setFormSubmitted(true);
        // Clear form fields
        setName('');
        setEmail('');
        setPassword('');
        setRole('');
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="container-fluid mt-3 d-flex justify-content-center align-items-center vh-100" style={{ maxWidth: '100%' }}>
      <div className="card p-4"  >
      <h2 className="text-center text-warning">Welcome To Collab Learn</h2>
        <h2 className="text-center">Signup Form</h2>
        <form class onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
          <label className="form-label">Role</label>
          <br></br>
          <select
            className="form-select"
            id="role"
            name="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="">Choose</option>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
          </select>
        </div>
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </div>
          {formSubmitted && <p className="mt-3 text-success text-center">Registered successfully!</p>}
        </form>
       <br></br>
        <button className="btn btn-primary d-block mx-auto">
          <Link to="/login" className="btn btn-primary mx-2">
            Login
          </Link>
          </button>
    </div>
    </div>
  );
}

export default SignupForm;