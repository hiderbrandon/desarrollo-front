import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const List = ({ users }) => {
  return (
    <div className="container mt-5">
      <h2>Lista de Usuarios</h2>
      <div className="row">
        {users.map(user => (
          <div key={user.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body d-flex align-items-center">
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
