import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { config } from '../config';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [identificationType, setIdentificationType] = useState('');
  const [identificationNumber, setIdentificationNumber] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log(`${config.backUrl}/api-auth/register/`);
      const response = await axios.post(`${config.backUrl}/api-auth/register/`, {
        username: username,
        password: password,
        identificationType: identificationType,
        identificationNumber: identificationNumber,
        lastName: 'Apellido',
        firstName: 'Nombre',
        userType: 'Gerente',
        gender: 'M',
        address: 'Dirección',
        phoneNumber: '1234567890'
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log('Response:', response.data);
      // Redirigir a la página de inicio o mostrar un mensaje de éxito
      navigate('/');
    } catch (error) {
      console.error('Error:', error);
      setError('Error al registrar. Verifique sus datos e inténtelo nuevamente.');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Registro</h2>
      {error && <p className="text-danger">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Usuario:</label>
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Contraseña:</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Tipo de identificación:</label>
          <select
            className="form-select"
            value={identificationType}
            onChange={(e) => setIdentificationType(e.target.value)}
          >
            <option value="">Seleccione...</option>
            <option value="CC">Cédula de ciudadanía (CC)</option>
            <option value="CE">Cédula de extranjería (CE)</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Número de identificación:</label>
          <input
            type="text"
            className="form-control"
            value={identificationNumber}
            onChange={(e) => setIdentificationNumber(e.target.value)}
          />
        </div>
        {/* Agrega más campos según sea necesario */}
        <div>
          <button type="submit" className="btn btn-primary">Registrarse</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
