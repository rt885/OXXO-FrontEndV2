"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./components/Sidebar";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "OXXO ESL",
//   description: "OXXO ESL WEBAPP",
// };

const RootLayout = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    // Verificar si ya existe un token al cargar el componente
    const token = localStorage.getItem("token");
    if (token) {
      verifyToken(token);
    }
  }, []);

  const verifyToken = async (token) => {
    try {
      const response = await axios.post(
        "https://oxxo-esls-backend.onrender.com/api/verifyToken",
        { token }
      );
      if (response.data.valid) {
        setLoggedIn(true);
      } else {
        localStorage.removeItem("token");
        setLoggedIn(false);
      }
    } catch (error) {
      console.error("Error verificando el token:", error);
      setLoggedIn(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://oxxo-esls-backend.onrender.com/api/users/login",
        { username, password }
      );
      const { token } = response.data;
      if (token) {
        // console.log("Token recibido:", token); // Aquí agregamos el console.log para mostrar el token
        localStorage.setItem("token", token);
        setLoggedIn(true);
      } else {
        alert("Inicio de sesión fallido, no se recibió un token.");
      }
    } catch (error) {
      console.error("Error durante el inicio de sesión:", error);
      alert("Error al iniciar sesión, por favor intenta de nuevo.");
    }
  };

  if (!loggedIn) {
    return (
      <html lang="en">
        <body className="login">
          <div className="h-screen flex flex-col justify-center items-center">
            <div className="bg-[#a0a0a0] p-24 shadow-md rounded-md">
              <h1 className="text-white text-2xl text-center">Iniciar Sesión</h1>
              <form
                onSubmit={handleLogin}
                className="mt-4 flex flex-col"
              >
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Usuario"
                  className="py-2 px-4 m-2 rounded"
                />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Contraseña"
                  className="py-2 px-4 m-2 rounded"
                />
                <button
                  type="submit"
                  className="py-2 px-4 m-2 rounded bg-blue-500 text-white"
                >
                  Iniciar Sesión
                </button>
              </form>
            </div>
          </div>
        </body>
      </html>
    );
  }
  return (
    <html lang="en">
      <body>
        <div className="grid grid-cols-4 h-screen bg-[#EEEEEE] container m-auto">
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
