import axios from 'axios';
import React, { useState } from 'react';
import { Link} from 'react-router-dom'; 
import { useNavigate} from 'react-router-dom'; 

function LoginForm() {
  // State to manage form input values and validation
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [formSubmitted, setFormSubmitted] = useState(false);
  const navigate = useNavigate()

  // Function to handle form submission
  const handleSubmit = (e) => {
    
    e.preventDefault();
    axios.post('http://localhost:5000/login',{email, password})
    .then(result =>{
      console.log(result)
      if(result.data   ==="tpage"){
        navigate('/teacherpage')
      }
      else if(result.data   ==="spage"){
        navigate('/studentpage')
      }
  })
  .catch(err=>console.log(err))
    // Add your form submission logic here
    //console.log(data);
    setFormSubmitted(true);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card">
        <div className=" container card-body">
          <h2 className="card-title text-center text-warning">Welcome to Collab Learn</h2>
          <h2 className="card-title text-center">Login Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label"> Email </label>
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
            <button type="submit" className="btn btn-primary d-block mx-auto">
              Login
            </button>
          </form>
          
          {formSubmitted && <p className="mt-3 text-success text-center">Logedin successfully!</p>}
          
          <br />
          <button className="btn btn-primary d-block mx-auto">
          <Link to="/register" className="btn btn-primary">
            SignupForm
          </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
