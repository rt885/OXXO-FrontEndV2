'use client'
import { useState } from "react";

const EditModal = ({ product, onClose, onUpdate }) => {
  const [precioActual, setPrecioActual] = useState(product.precio_actual);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token"); // Obtén el token del almacenamiento local
    
    if (!token) {
      alert("Token no encontrado. Por favor, inicia sesión.");
      return;
    }

    const updatedPriceInfo = {
      tienda_id: product.tienda_id,
      producto_id: product.producto_id,
      etiqueta_id: product.etiqueta_id,
      precio_actual: parseFloat(precioActual),
    };

    try {
      const response = await fetch("https://oxxo-esls-backend.onrender.com/api/prices/update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, 
        },
        body: JSON.stringify(updatedPriceInfo),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Price updated successfully:", data);
        alert("Precio actualizado exitosamente.");
        onUpdate({ ...product, precio_actual: precioActual }); // Actualiza el producto en el estado
        onClose(); // Cierra el modal tras una actualización exitosa
      } else {
        const errorData = await response.json();
        throw new Error("Failed to update the price: " + errorData.message);
      }
    } catch (error) {
      console.error("Error updating price:", error);
      alert("Error al actualizar el precio: " + error.message);
    }
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <h2>Editar Precio del Producto</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="precioActual">Precio Actual:</label>
          <input
            type="number"
            id="precioActual"
            className="border-2 border-gray-300 p-1 rounded-md w-full mb-2"
            value={precioActual}
            onChange={(e) => setPrecioActual(e.target.value)}
            required
          />
          <div className="modal-actions">
            <button
              type="submit"
              className="save-btn bg-[#1f722f] text-white p-2 rounded-lg"
            >
              Guardar
            </button>
            <button
              type="button"
              className="close-btn bg-[#C92D20] text-white p-2 rounded-lg"
              onClick={onClose}
            >
              Cancelar
            </button>
          </div>
        </form>
        <button className="close" onClick={onClose}>
          &times;
        </button>
      </div>
    </div>
  );
};

export default EditModal;