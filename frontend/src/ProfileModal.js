import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

const ProfileModal = ({ show, handleClose, userToken }) => {
  const [userData, setUserData] = useState({});

  axios.defaults.withCredentials = true;
  useEffect(() => {
    async function fetchUserProfile() {
      try {
        const response = await axios.get('https://collab-learn-server.vercel.app/profile', {
          headers: {
            Authorization: `Bearer ${userToken}`, // Include the user's token here
          },
        });
        setUserData(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    if (show && userToken) {
      fetchUserProfile();
    }
  }, [show, userToken]);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          <span className="me-2">
            <i className="bi bi-person"></i> {/* Bootstrap styled person icon */}
          </span>
          User Profile
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Name: Sandesh</p>
        <p>Email:sandesh@123</p>
        {/* Add more user profile information here */}
      </Modal.Body>
    </Modal>
  );
};

export default ProfileModal;
