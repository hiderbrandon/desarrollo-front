import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { config } from '../config';

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
        const response = await axios.post(`http://localhost:8000/api-auth/register/`, {
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
    <div>
      <h2>Registro</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Usuario:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Contraseña:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Tipo de identificación:
            <select value={identificationType} onChange={(e) => setIdentificationType(e.target.value)}>
              <option value="">Seleccione...</option>
              <option value="CC">Cédula de ciudadanía (CC)</option>
              <option value="CE">Cédula de extranjería (CE)</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Número de identificación:
            <input
              type="text"
              value={identificationNumber}
              onChange={(e) => setIdentificationNumber(e.target.value)}
            />
          </label>
        </div>
        {/* Agrega más campos según sea necesario */}
        <div>
          <button type="submit">Registrarse</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
