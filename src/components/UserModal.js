import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { config } from '../config';
const UserModal = ({ isOpen, onClose, userId }) => {
  
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('accessToken');
  
        // Verificar si el token existe
        if (!token) {
          console.error('Token not found in localStorage');
          return;
        }
        const response = await axios.get(`${config.backUrl}/api-auth/profile/${userId}`, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
        });
        // Suponiendo que response.data es un objeto que contiene los datos del usuario

        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
  
    if (isOpen && userId) {
      fetchData();
    }
  }, [isOpen, userId]); // Se ejecuta cuando isOpen o userId cambian
  
   console.log('UserData',userData );

  return (
    <div className={`modal fade${isOpen ? ' show d-block' : ''}`} tabIndex="-1" role="dialog" aria-labelledby="userModalLabel" aria-hidden={!isOpen}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="userModalLabel">User Information</h5>
            <button type="button" className="close" onClick={onClose} aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            {userData && (
              <>
                <p><strong>Username:</strong> {userData.username}</p>
                <p><strong>Password:</strong> {userData.password}</p>
                <p><strong>Identification Type:</strong> {userData.identificationType}</p>
                <p><strong>Identification Number:</strong> {userData.identificationNumber}</p>
                <p><strong>Last Name:</strong> {userData.lastName}</p>
                <p><strong>First Name:</strong> {userData.firstName}</p>
                <p><strong>User Type:</strong> {userData.userType}</p>
                <p><strong>Gender:</strong> {userData.gender}</p>
                <p><strong>Address:</strong> {userData.address}</p>
                <p><strong>Phone Number:</strong> {userData.phoneNumber}</p>
              </>
            )}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
