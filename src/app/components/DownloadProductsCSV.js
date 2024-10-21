'use client'
import { useState } from "react";
import { CSVLink } from "react-csv";

const DownloadProductsCSV = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const token = localStorage.getItem("token"); // Obtén el token del almacenamiento local
    const response = await fetch("https://oxxo-esls-backend.onrender.com/api/products", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    setProducts(data);
  };

  const headers = [
    { label: "ID", key: "producto_id" },
    { label: "SKU", key: "sku" },
    { label: "Nombre", key: "nombre" },
    { label: "Categoría", key: "categoria" },
    { label: "Proveedor ID", key: "proveedor_id" },
  ];

  return (
    <div className="flex justify-center items-center mt-2">
      <button onClick={fetchProducts} className="text-white bg-blue-500 p-2 rounded mr-2">
        Descargar Productos CSV
      </button>
      {products.length > 0 && (
        <CSVLink
          data={products}
          headers={headers}
          filename={"productos.csv"}
          className="text-white bg-[#C92D20] p-2 rounded"
        >
          Download Products
        </CSVLink>
      )}
    </div>
  );
};

export default DownloadProductsCSV;