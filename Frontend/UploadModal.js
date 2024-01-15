import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';


const UploadModal = ({ show, handleClose }) => {

            const [file, setFile] = useState(null);
            const [videoTitle, setVideoTitle] = useState('');
            const [author, setAuthor] = useState('');
            const [tag, setTag] = useState('');
            const [isUploadClicked, setUploadClicked] = useState(false);
            
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

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Upload Video</Modal.Title>
      </Modal.Header>
      <Modal.Body>
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
      </Modal.Body>
    </Modal>
  );
};

export default UploadModal;
