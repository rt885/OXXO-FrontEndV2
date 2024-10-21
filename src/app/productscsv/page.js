"use client"
import { useState } from "react";
import ClientButton from "../components/ClientButton";
import NewProduct from "../components/NewProduct";
import SearchBarGeneral from "../components/SearchBarGeneral";

const ProductsCsv = () => {
  const [file, setFile] = useState(null);

  const onFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const onFileUpload = () => {
    const token = localStorage.getItem("token"); // Obtén el token del almacenamiento local
    console.log(`token: ${token}`); // Mensaje de depuración
    const formData = new FormData();
    formData.append("file", file);

    fetch("https://oxxo-esls-backend.onrender.com/api/products/bulk-create", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => alert(data.message))
      .catch((error) => console.error("Error uploading the file:", error));
  };

  return (
    <div className="h-screen lg:col-start-2 col-start-1 col-end-5 overflow-y-hidden">
      {/* Buscador - Informacion User */}
      <SearchBarGeneral page={"Products CSV"} />
      {/* Create Product */}
      <NewProduct />
      {/* Contenido */}
      <div>
        <div>
          <h2 className="text-center mt-5 lg:text-2xl text-base font-bold lg:font-normal">
            Create Product CSV
          </h2>
        </div>
        <div className="grid grid-cols-6 grid-rows-6 h-full">
          <div className="bg-[#e0e0e0] col-start-2 col-end-6 row-start-1 row-end-7 grid grid-cols-6 grid-rows-5 p-6 rounded-lg shadow-md">
            <div className="col-start-2 col-end-6 row-start-1 row-end-3">
              <div className="bg-[#DB0909] rounded-lg h-20 flex justify-center items-center shadow-md">
                <input
                  type="file"
                  id="file"
                  className="text-white"
                  accept=".csv"
                  onChange={onFileChange}
                />
              </div>
            </div>
            <div className="col-start-2 col-end-6 row-start-3 row-end-5">
              <div className="bg-[#DB0909] rounded-lg h-20 flex justify-center items-center shadow-md">
                <button className="text-white" onClick={onFileUpload}>
                  Upload
                </button>
              </div>
            </div>
            <div className="col-start-2 col-end-6 row-start-5 row-end-6">
              <div className="bg-[#DB0909] rounded-lg h-20 flex justify-center items-center shadow-md">
                <ClientButton id="cancelButton">Cancel</ClientButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCsv;
