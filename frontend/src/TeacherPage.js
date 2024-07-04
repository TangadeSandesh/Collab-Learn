
// import React, { useState } from 'react';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Modal from 'react-bootstrap/Modal';
// import ProfileModal from './ProfileModal'; // Import the ProfileModal component
// import UploadModal from './UploadModal'; // Import the UploadModal component

// const TeacherPage = () => {
//   const [isDropdownOpen, setDropdownOpen] = useState(false);
//   const [file, setFile] = useState(null);
//   const [videoTitle, setVideoTitle] = useState('');
//   // const [author, setAuthor] = useState('');
//   // const [tag, setTag] = useState('');
//   // const [isUploadClicked, setUploadClicked] = useState(false);
//   const [showProfileModal, setShowProfileModal] = useState(false);
//   const [showUploadModal, setShowUploadModal] = useState(false);

//   const toggleDropdown = () => {
//     setDropdownOpen(!isDropdownOpen);
//   };
  
//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleProfileLinkClick = () => {
//     setShowProfileModal(true);
//     setDropdownOpen(false);
//   };

//   const handleUploadLinkClick = () => {
//     setShowUploadModal(true);
//     setDropdownOpen(false);
//   };

//   return (
//     <div>
//       <header className="bg-dark mb-3">
//         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//           <a className="navbar-brand" href="">
//             <img className="mx-3" src="logo192.png" alt="Logo" style={{ width: '40px' }} />
//           </a>

//           <button
//             className="navbar-toggler"
//             type="button"
//             data-toggle="collapse"
//             data-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded={isDropdownOpen ? 'true' : 'false'}
//             aria-label="Toggle navigation"
//             onClick={toggleDropdown}
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>

//           <div
//             className={`collapse navbar-collapse ${isDropdownOpen ? 'show' : ''}`}
//             id="navbarSupportedContent"
//           >
//             <ul className="navbar-nav mr-auto">
//               <li className="nav-item dropdown">
//                 <div className="btn-group">
//                   <button type="button" className="btn btn-warning dropdown-toggle" onClick={toggleDropdown}>
//                     Explore
//                   </button>
//                   <div className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
//                     <a className="dropdown-item" href="" onClick={handleProfileLinkClick}>
//                       Profile
//                     </a>
//                     <a className="dropdown-item" href="" onClick={handleUploadLinkClick}>
//                       Upload
//                     </a>
//                     <a className="dropdown-item" href="" onClick={handleUploadLinkClick}>
//                       Projects
//                     </a>
//                     <a className="dropdown-item" href="" onClick={handleUploadLinkClick}>
//                       courses
//                     </a>
//                   </div>
//                 </div>
//               </li>
//             </ul>

//             <form className="form-inline my-5 my-lg-0 mx-2 col-4 col-sm-6">
//               <input className="form-control mx-5 mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
//               <button className="btn btn-outline-success   my-sm-2" type="submit">
//                 Search
//               </button>
//             </form>
//             <div>
//               <ul className="navbar-nav ml-auto">
//                 <li className="nav-item">
//                   <a className="nav-link" href="/">
//                     Signout
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </nav>
// </header>
//         <section class="container-fluid mb-2">           
//               <div id="demo" class="carousel slide" data-ride="carousel">
//                 <ul class="carousel-indicators">
//                   <li data-target="#demo" data-slide-to="0" class="active"></li>
//                   <li data-target="#demo" data-slide-to="1"></li>
//                   <li data-target="#demo" data-slide-to="2"></li>
//                 </ul>
//                 <div class="carousel-inner">
//                   <div class="carousel-item active">
//                     <img src="Homepic2.jpeg" alt="Los Angeles" width="1500" height="500"/>
//                     <div class="carousel-caption">
//                       <h3>Conceptual clarity</h3>
//                       <p>through visualisation</p>
//                     </div>   
//                   </div>
//                   <div class="carousel-item">
//                     <img src="Homepic.jpeg" alt="Hoe" width="1500" height="500"/>
//                     <div class="carousel-caption">
//                       <h3>Personalised </h3>
//                       <p>learning programs</p>
//                     </div>   
//                   </div>
//                   <div class="carousel-item">
//                     <img src="Homepic3.jpeg" alt="New York" width="1500" height="500"/>
//                     <div class="carousel-caption">
//                       <h3>Unmatched</h3>
//                       <p>individual attention</p>
//                     </div>   
//                   </div>
//                 </div>
//                 <a class="carousel-control-prev" href="#demo" data-slide="prev">
//                   <span class="carousel-control-prev-icon"></span>
//                 </a>
//                 <a class="carousel-control-next" href="#demo" data-slide="next">
//                   <span class="carousel-control-next-icon"></span>
//                 </a>
//               </div>
//         </section>
      

//       {/* Profile Modal */}
//       <ProfileModal show={showProfileModal} handleClose={() => setShowProfileModal(true)} />

//       {/* Upload Modal */}
//       <UploadModal show={showUploadModal} handleClose={() => setShowUploadModal(true)} />
      

//       <footer>
//         <a href="" class="flex-align-left">&copy; 2023 | Collab Learn</a>
//       </footer>
//     </div>
//   );
// };

// export default TeacherPage;

import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


const TeacherPage = () => {
        const [isDropdownOpen, setDropdownOpen] = useState(false);
        const [file, setFile] = useState(null);
        const [videoTitle, setVideoTitle] = useState('');
        const [author, setAuthor] = useState('');
        const [tag, setTag] = useState('');
        const [isUploadClicked, setUploadClicked] = useState(false);

        const toggleDropdown = () => {
            setDropdownOpen(!isDropdownOpen);
        };
      
        const handleFileChange = (e) => {
          setFile(e.target.files[0]);
        };

        const handleFileUpload = async () => {
          try {
            const formData = new FormData();
            formData.append('videotitle', videoTitle);
            formData.append('author', author);
            formData.append('tag', tag);
            formData.append('video', file);

            const response = await axios.post('http://localhost:5000/upload-video', formData, {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            });

            console.log(response.data);
            alert("Video Uploaded Successfully");
          } 
          catch (error) {
            console.error(error);
            alert(`failed due to ${error}`);
          }
          setUploadClicked(false);

        };

        const handleUploadButtonClick = () => {
            setUploadClicked(true);
        };


  return (
    <div>
      <header className="bg-dark mb-3">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">
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
                        <button type="button" className="btn btn-warning dropdown-toggle" onClick={toggleDropdown} > Explore </button>
                            <div className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`} >
                                <a className="dropdown-item" href="#">Profile </a>
                                <a className="dropdown-item" href="#">Upload </a>
                                <a className="dropdown-item" href="#">Courses </a>
                                <a className="dropdown-item" href="#">Projects </a>
                            </div>
                        </div>
                    </li>
                </ul>

                <form className="form-inline my-5 my-lg-0 mx-2 col-4 col-sm-6">
                    <input className="form-control mx-5 mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success   my-sm-2" type="submit">
                            Search
                        </button>
                </form>
                <div>
                  <ul class="navbar-nav ml-auto">
                  <li class="nav-item">
                    <a class="nav-link" href="/">Signout</a>

                  </li>
                  </ul>
                </div>
              </div>
            </nav>
        </header>

        <section>
        <div className="container-fluid">
          <div className="container mt-3">
            <h2>Upload Video File</h2>
            <form>
            <div className="mt-3 width-50%"/>
                <div className="form-group ">
                  <label htmlFor="videoName">Video Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="videoName"
                    value={videoTitle}
                    onChange={(e) => setVideoTitle(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="videoName">Author</label>
                  <input
                    type="text"
                    className="form-control"
                    id="videoName"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="videoName">Add Tags</label>
                  <input
                    type="text"
                    className="form-control"
                    id="videoName"
                    value={tag}
                    onChange={(e) => setTag(e.target.value)}
                  />
                </div>
              <div className="custom-file">
                <label htmlFor="videoName">Choose File</label>
                <input
                  type="file"
                  className="custom-file-input"
                  id="customFile"
                  name="video"
                  onChange={handleFileChange}
                />
                <label className="custom-file-label" htmlFor="customFile">
                  {file ? file.name : ''}
                </label>
              </div>
              <div className="mt-3">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleFileUpload}
                >
                  Upload
                </button>
              </div>
            </form>
          </div>
        </div>
        </section>
    </div>


  );
};

export default TeacherPage;


