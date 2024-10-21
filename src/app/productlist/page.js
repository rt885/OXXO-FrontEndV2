"use client";
import { useState, useEffect } from "react";
import SearchBarGeneral from "../components/SearchBarGeneral";
import DownloadProductsCSV from "../components/DownloadProductsCSV";

const ProductList = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const token = localStorage.getItem("token"); // Obtén el token del almacenamiento local
      try {
        const response = await fetch("https://oxxo-esls-backend.onrender.com/api/products", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok) throw new Error("Error fetching products");
        const data = await response.json();
        setProductos(data); // Establece los datos obtenidos
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []); // El segundo argumento [] asegura que esto se ejecute solo una vez al montar

  return (
    <div className="h-screen lg:col-start-2 col-start-1 col-end-5 overflow-y-hidden">
      {/* SearchBar */}
      <SearchBarGeneral page={"Product List"} />
      {/* Content */}
      <DownloadProductsCSV />
      <div className="w-full mt-5 h-4/5 bg-white overflow-y-auto">
        <table className="min-w-full leading-normal">
          {/* Table headers */}
          <thead className="sticky top-0">
            <tr>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Producto ID
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                SKU
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Nombre
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Categoría
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Proveedor ID
              </th>
            </tr>
          </thead>
          {/* Table Body */}
          <tbody>
            {productos.length > 0 ? (
              productos.map((producto) => (
                <tr key={producto.producto_id}>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    {producto.producto_id}
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    {producto.sku}
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    {producto.nombre}
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    {producto.categoria}
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    {producto.proveedor_id}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-5">
                  No hay productos para mostrar
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;
