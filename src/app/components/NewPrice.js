"use client";
import axios from "axios";
import { useState } from "react";

const NewPrice = () => {
  const [precioActual, setPrecioActual] = useState("");
  const [tiendaId, setTiendaId] = useState("");
  const [etiquetaId, setEtiquetaId] = useState("");
  const [productoId, setProductoId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    try {
      const response = await axios.post(
        "https://oxxo-esls-backend.onrender.com/api/prices/create",
        {
          precio_actual: precioActual,
          tienda_id: tiendaId,
          etiqueta_id: etiquetaId,
          producto_id: productoId,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data.message);
      alert("Precio creado exitosamente.");
    } catch (error) {
      console.error("Error creating price:", error);
      alert("Error al crear el precio: " + error.message);
    }
  };

  return (
    <div className="">
      <h2 className="text-center font-bold">Agregar Precio</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 grid-rows-2 gap-x-5">
          <div className="col-start-1 col-end-2">
            <label>
              Producto ID:
              <input
                className="border-2 border-gray-300 p-1 rounded-md w-full mb-2"
                type="number"
                value={productoId}
                onChange={(e) => setProductoId(e.target.value)}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Precio Actual:
              <input
                className="border-2 border-gray-300 p-1 rounded-md w-full mb-2"
                type="number"
                value={precioActual}
                onChange={(e) => setPrecioActual(e.target.value)}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Tienda ID:
              <input
                className="border-2 border-gray-300 p-1 rounded-md w-full mb-2"
                type="text"
                value={tiendaId}
                onChange={(e) => setTiendaId(e.target.value)}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Etiqueta ID:
              <input
                className="border-2 border-gray-300 p-1 rounded-md w-full mb-2"
                type="text"
                value={etiquetaId}
                onChange={(e) => setEtiquetaId(e.target.value)}
                required
              />
            </label>
          </div>
        </div>
        <div className="flex justify-center mt-2">
          <button
            type="submit"
            className="save-btn bg-[#1f722f] text-white p-2 rounded-lg"
          >
            Agregar Precio
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewPrice;
