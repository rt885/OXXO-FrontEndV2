"use client";
import SearchBarLabels from "../components/SearchBarLabels";
import { useState } from "react";

const EtiquetasTiendaPage = () => {
  const [etiquetas, setEtiquetas] = useState([]);

  const handleSearchComplete = (data) => {
    console.log("Search complete, data received:", data); // Mensaje de depuración
    setEtiquetas(data);
  };

  return (
    <div className="h-screen lg:col-start-2 col-start-1 col-end-5 overflow-y-hidden">
      <SearchBarLabels onSearchComplete={handleSearchComplete} />
      {/* Table */}
      <div className="w-full h-4/5 bg-white overflow-y-auto">
        <table className="min-w-full leading-normal">
          {/* Table headers */}
          <thead className="sticky top-0">
            <tr>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Etiqueta ID
              </th>
            </tr>
          </thead>
          {/* Table Body */}
          <tbody>
            {etiquetas.length > 0 ? (
              etiquetas.map((etiqueta) => (
                <tr key={etiqueta.etiqueta_id}>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    {etiqueta.etiqueta_id}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="1" className="text-center py-5">
                  No hay etiquetas para mostrar
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EtiquetasTiendaPage;
