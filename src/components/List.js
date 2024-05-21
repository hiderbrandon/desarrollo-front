import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';

const List = ({ users, onDelete }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);

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

  const handleEdit = (userId) => {
    // Abrir el modal y establecer el ID del usuario seleccionado
    setShowModal(true);
    setSelectedUserId(userId);
  };

  const handleCloseModal = () => {
    // Cerrar el modal y restablecer el ID del usuario seleccionado
    setShowModal(false);
    setSelectedUserId(null);
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
                <div className="d-flex justify-content-between">
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(user.id)}
                  >
                    Borrar
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleEdit(user.id)}
                  >
                    Editar
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal para mostrar el ID del usuario seleccionado */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>ID del Usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>El ID del usuario seleccionado es: {selectedUserId}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default List;
