import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import {config  } from '../config';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(config + "/api-auth/token/", {
        username: username,
        password: password
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log('Response:', response.data);
      // Guardar el token en localStorage
      localStorage.setItem('refreshToken', response.data.refresh);
      // Redirigir a la página de inicio
      navigate('/');
    } catch (error) {
      console.error('Error:', error);
      setError('Error de autenticación. Verifique sus credenciales.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
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
          <button type="submit">Iniciar Sesión</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
