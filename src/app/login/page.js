"use client";
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useRouter(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://oxxo-esls-backend.onrender.com/api/users/login', { username, password });
      const { token } = response.data;
      if (token) {
        localStorage.setItem('token', token); // Guarda el token en el almacenamiento local
        navigation.push('/management'); // Redirige al usuario a la página de inicio o dashboard
      } else {
        console.error('No se recibió un token en la respuesta.');
      }
    } catch (error) {
      console.error('Error durante el inicio de sesión:', error.response.data.message);
      // Aquí puedes manejar errores específicos, como mostrar mensajes en la UI
    }
  };

  return (
    <div className=''>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
