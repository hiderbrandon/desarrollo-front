import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const List = ({ users, onDelete }) => {
  const handleDelete = async (userId) => {
    try {
      const token = localStorage.getItem('accessToken');
      await axios.delete('http://localhost:8000/api-auth/profile/delete/', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        data: {
          user_id: userId
        }
      });
      onDelete(userId); // Llamar a la función onDelete para actualizar la lista de usuarios
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Lista de Usuarios</h2>
      <div className="row">
        {users.map(user => (
          <div key={user.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body d-flex flex-column align-items-start">
                <div className="d-flex align-items-center mb-3">
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg"
                    alt="profile"
                    className="img-fluid rounded-circle mr-3"
                    style={{ width: '40px', height: '40px' }}
                  />
                  <div>
                    <p className="mb-1"><strong>ID:</strong> {user.id}</p>
                    <p className="mb-1"><strong>Username:</strong> {user.username}</p>
                    <p className="mb-0"><strong>Email:</strong> {user.email}</p>
                  </div>
                </div>
                <button
                  className="btn btn-danger mt-auto"
                  onClick={() => handleDelete(user.id)}
                >
                  Borrar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
