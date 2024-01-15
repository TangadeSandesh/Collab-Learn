import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactPlayer from 'react-player';
import "./style.css"

const StudentPage = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [videoTitle, setVideoTitle] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleSearch = () => {
    axios
      .get(`http://localhost:5000/stream-video/${videoTitle}`) // Use the new streaming route
      .then((response) => {
        if (response.status === 200) {
          setVideoUrl(`http://localhost:5000/stream-video/${videoTitle}`);
        } else {
          
          console.log('No videos found.');
          alert("No such Video found");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  

  return (
    <div>
      <header className="bg-dark mb-3">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="">
            <img className="mx-3" src="logo192.png" alt="Logo" style={{ width: '40px' }} />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded={isDropdownOpen ? 'true' : 'false'}
            aria-label="Toggle navigation"
            onClick={toggleDropdown}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`collapse navbar-collapse ${isDropdownOpen ? 'show' : ''}`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mr-auto">
              <li className="nav-item dropdown">
                <div className="btn-group">
                  <button type="button" className="btn btn-warning dropdown-toggle" onClick={toggleDropdown}> Explore</button>
                  <div className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`} >
                    <a className="dropdown-item" href="">Profile</a>
                    <a className="dropdown-item" href="">Courses</a>
                    <a className="dropdown-item" href="">Projects</a>
                  </div>
                </div>
              </li>
            </ul>

            <form className="form-inline my-5 my-lg-0 ml-auto col-4 col-sm-6">
              <input
                className="form-control mx-5 mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={videoTitle}
                onChange={(e) => setVideoTitle(e.target.value)}
              />
              <button className="btn btn-outline-success mx-2 my-sm-2" type="button" onClick={handleSearch}>
                Search
              </button>
            </form>
            
                <div>
                  <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="/">Signout</a>
                  </li>
                  </ul>
                </div>
          </div>
        </nav>
        
      </header>

      {videoUrl && (
  <div className="container mt-3 ml-auto">
    <div className="border p-3 bg-warning">
      <ReactPlayer
        url={videoUrl}
        controls
        width="100%"
        height="auto"
        playing
      />
    </div>
  </div>
)}

<section className="container mt-3">
        <h2 className='text-center'> Demo Videos</h2>
        <div className="row">
          {/* Video 1 */}
          <div className="col-md-4">
            <div>
              
              <ReactPlayer
                 
                url="https://youtu.be/IZa8pbR8CWs?si=iOr70T4sMPLuSdAG"
                width="100%"
                controls
              />
              <h5>CSS adding</h5>
              <p></p>
            </div>
          </div>

          {/* Video 2 */}
          <div className="col-md-4">
            <div>
             
              <ReactPlayer
                url="https://youtu.be/ZCvemsUfwPQ?si=9hA5As6O1QtdF9Qo"
                width="100%"
                controls
              />
              <h5>React Modal</h5>
              <p></p>
            </div>
          </div>

          {/* Video 3 */}
          <div className="col-md-4">
            <div>
              
              <ReactPlayer
                url="https://youtu.be/SxMW7uLmMgs?si=TvlAYmBL5KGX0_oY"
                width="100%"
                controls
              />
              <h5>HTML </h5>
              <p></p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mt-3">
        <h2 className='text-center'>Courses</h2>
        <div className="row">
          {/* Add your course content here */}
          <div className="col-md-4">
            <div className="card">
              {/* <img src="course_image.jpg" className="card-img-top" alt="Course" /> */}
              <div className="card-body">
                <h5 className="card-title">Operating System</h5>
                <p className="card-text"></p>
                <a href="#" className="btn btn-primary">Enroll</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
                {/* <img src="course_image.jpg" className="card-img-top" alt="Course" /> */}
                <div className="card-body">
                  <h5 className="card-title">Data Structures</h5>
                  <p className="card-text"></p>
                  <a href="#" className="btn btn-primary">Enroll</a>
                </div>
              </div>
          </div>
          <div className="col-md-4">
            <div className="card">
                {/* <img src="course_image.jpg" className="card-img-top" alt="Course" /> */}
                <div className="card-body">
                  <h5 className="card-title">DBMS</h5>
                  <p className="card-text"></p>
                  <a href="#" className="btn btn-primary">Enroll</a>
                </div>
              </div>
          </div>
        </div>
      </section>
      <footer>
        <a href="" class="flex-align-left">&copy; 2023 | Collab Learn</a>
      </footer>
      
    </div>
  );
};

export default StudentPage;
