"use client";
import { useState } from "react";
import SearchBarGeneral from "../components/SearchBarGeneral";

const AddUser = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token"); // Obtén el token del almacenamiento local

    if (!token) {
      alert("Token no encontrado. Por favor, inicia sesión.");
      return;
    }

    const newUser = {
      username,
      password,
      role,
    };

    try {
      const response = await fetch("https://oxxo-esls-backend.onrender.com/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newUser),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("User created successfully:", data);
        alert("Usuario creado exitosamente.");
        // Limpiar el formulario después de la creación exitosa
        setUsername("");
        setPassword("");
        setRole("user");
      } else {
        const errorData = await response.json();
        throw new Error("Failed to create user: " + errorData.message);
      }
    } catch (error) {
      console.error("Error creating user:", error);
      alert("Error al crear el usuario: " + error.message);
    }
  };

  return (
    <div className="h-screen lg:col-start-2 col-start-1 col-end-5 overflow-y-hidden	">
      {/* SearchBar */}
      <SearchBarGeneral page={"Create User"} />
      {/* Content */}
      <div className="add-user-form">
        <h2 className="text-center my-5 font-bold text-2xl">Create a new user</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">User Name:</label>
          <input
            type="text"
            id="username"
            className="border-2 border-gray-300 p-1 rounded-md w-full mb-2"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            className="border-2 border-gray-300 p-1 rounded-md w-full mb-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label htmlFor="role">Role:</label>
          <select
            id="role"
            className="border-2 border-gray-300 p-1 rounded-md w-full mb-2"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="user">General User</option>
            <option value="admin">Admin</option>
          </select>
          <div className="form-actions flex justify-center">
            <button
              type="submit"
              className="save-btn bg-[#1f722f] text-white p-2 rounded-lg"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
