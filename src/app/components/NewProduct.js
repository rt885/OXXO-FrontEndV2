"use client";
import React, { useState } from "react";

const NewProduct = () => {
  const [producto, setProducto] = useState({
    sku: "",
    nombre: "",
    categoria: "",
    proveedor_id: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token");

    try {
      const response = await fetch("https://oxxo-esls-backend.onrender.com/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(producto),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Product created successfully:", data);
        alert("Producto creado exitosamente.");
      } else {
        const errorData = await response.json();
        throw new Error("Failed to create the product: " + errorData.message);
      }
    } catch (error) {
      console.error("Error creating product:", error);
      alert("Error al crear el producto: " + error.message);
    }
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setProducto((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  return (
    <div className="">
      <h2 className="text-center font-bold">Agregar Producto</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 grid-rows-2 gap-x-5">
          <div className="col-start-1 col-end-2">
            <label htmlFor="sku">SKU:</label>
            <input
              type="text"
              id="sku"
              className="border-2 border-gray-300 p-1 rounded-md w-full mb-2"
              value={producto.sku}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="">
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              id="nombre"
              className="border-2 border-gray-300 p-1 rounded-md w-full mb-2"
              value={producto.nombre}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="">
            <label htmlFor="categoria">Categoría:</label>
            <input
              type="text"
              id="categoria"
              className="border-2 border-gray-300 p-1 rounded-md w-full mb-2"
              value={producto.categoria}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="">
            <label htmlFor="proveedor_id">Proveedor ID:</label>
            <input
              type="number"
              id="proveedor_id"
              className="border-2 border-gray-300 p-1 rounded-md w-full mb-2"
              value={producto.proveedor_id}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="flex justify-center mt-2">
          <button
            type="submit"
            className="save-btn bg-[#1f722f] text-white p-2 rounded-lg"
          >
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewProduct;
