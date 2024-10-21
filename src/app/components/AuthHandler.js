'use client'
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";

const AuthHandler = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const token = localStorage.getItem("token"); // Obtén el token del almacenamiento local
      if (token) {
        // Si hay un token, verifica su validez haciendo una solicitud al backend
        try {
          const response = await axios.post("/api/verifyToken", { token });
          if (response.data.valid) {
            // Si el token es válido, establece el estado de loggedIn como verdadero
            setLoggedIn(true);
          } else {
            // Si el token no es válido, elimínalo del almacenamiento local
            localStorage.removeItem("token");
            // Redirige al usuario al formulario de inicio de sesión
            // router.push("/login");
          }
        } catch (error) {
          console.error("Error verificando el token:", error);
          // Maneja el error, por ejemplo, redirigiendo al usuario al formulario de inicio de sesión
          // router.push("/login");
        }
      } else {
        // Si no hay token, redirige al usuario al formulario de inicio de sesión
        // router.push("/login");
      }
    };

    checkLoginStatus();
  }, []);

  return loggedIn ? (
    children
  ) : (
    <Link href="/">
      <p>Login</p>
    </Link>
  );
};

export default AuthHandler;
