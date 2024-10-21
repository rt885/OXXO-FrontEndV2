"use client";
import Link from "next/link";
import { useState } from "react";
import EditModal from "../components/EditModal";
import SearchBar from "../components/SearchBarManagement";

const Management = () => {
  const [productos, setProductos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleSearchComplete = (data) => {
    setProductos(data);
  };

  const handleEditClick = (producto) => {
    setSelectedProduct(producto);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleUpdateProduct = (updatedProduct) => {
    setProductos((prevProductos) =>
      prevProductos.map((producto) =>
        producto.producto_id === updatedProduct.producto_id
          ? updatedProduct
          : producto
      )
    );
    setIsModalOpen(false);
  };

  return (
    <div className="h-screen lg:col-start-2 col-start-1 col-end-5 overflow-y-hidden">
      {/* Buscador - Informacion User */}
      <SearchBar onSearchComplete={handleSearchComplete} />
      {/* Link Bar */}
      <div className="grid lg:grid-cols-4 lg:grid-rows-1 grid-cols-2 grid-rows-2 lg:h-20">
        <div className="bg-[#DB0909] lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-1 col-start-1 row-start-1 lg:h-1/2 h-3/4 w-2/3 m-auto rounded-lg flex items-center justify-center">
          <Link href="/productscsv">
            <p className="text-center text-white">Producto</p>
          </Link>
        </div>
        <div className="bg-[#DB0909] lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-1 col-start-2 row-start-1 lg:h-1/2 h-3/4 w-2/3 m-auto rounded-lg flex items-center justify-center">
          <Link href="/tiendacsv">
            <p className="text-center text-white">Tienda</p>
          </Link>
        </div>
        <div className="bg-[#DB0909] lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-1 col-start-1 row-start-2 lg:h-1/2 h-3/4 w-2/3 m-auto rounded-lg flex items-center justify-center">
          <Link href="/etiquetas">
            <p className="text-center text-white">Etiqueta</p>
          </Link>
        </div>
        <div className="bg-[#DB0909] lg:col-start-4 lg:col-end-5 lg:row-start-1 lg:row-end-1 col-start-2 row-start-2 lg:h-1/2 h-3/4 w-2/3 m-auto rounded-lg flex items-center justify-center">
          <Link href="/pricescsv">
            <p className="text-center text-white">Precio</p>
          </Link>
        </div>
      </div>
      {/* Table */}
      <div className="w-full h-4/5 bg-white overflow-y-auto">
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
                Price
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Proveedor ID
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                ESL ID
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Edit
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
                    {"$ " + producto.precio_actual}
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    {producto.proveedor_id}
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    {producto.etiqueta_id}
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <button
                      onClick={() => handleEditClick(producto)}
                      className="text-blue-500 hover:text-blue-800 underline"
                    >
                      Editar
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center py-5">
                  No hay productos para mostrar
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {isModalOpen && (
        <EditModal
          product={selectedProduct}
          onClose={handleCloseModal}
          onUpdate={handleUpdateProduct}
        />
      )}
    </div>
  );
};

export default Management;
