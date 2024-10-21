// Crea un archivo axiosClient.js en tu carpeta utils o donde prefieras
import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'http://localhost:8080/api',  // Ajusta esto a tu URL base de API
  headers: {
    'Content-Type': 'application/json'
  }
});

// Interceptor para incluir el token en cada solicitud
axiosClient.interceptors.request.use(function (config) {
  const token = localStorage.getItem('token');
  config.headers.Authorization =  token ? `Bearer ${token}` : '';
  return config;
});

export default axiosClient;
