import React, { useEffect, useState } from 'react';
import axios from 'axios';
import List from '../components/List';
import { config } from '../config';
import RegisterForm from '../components/RegisterForm/RegisterForm';

const AdmonUser = () => {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);

  // Fetch Users List 
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${config.backUrl}/api-auth/profile/allusers/`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
          }
        });
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <div>
      <h1>Dashboard</h1>

      <button className="btn btn-primary" onClick={handleShow}>
        Register New User
      </button>
      
      {showModal && (
        <div className="modal show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Register New User</h5>
                <button type="button" className="close" aria-label="Close" onClick={handleClose}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <RegisterForm />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleClose}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}

      <List users={users} />
    </div>
  );
};

export default AdmonUser;
