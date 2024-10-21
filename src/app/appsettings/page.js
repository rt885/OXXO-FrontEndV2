import Link from "next/link";
import SearchBarGeneral from "../components/SearchBarGeneral";

const Appsettings = () => {
  return (
    <div className="h-screen lg:col-start-2 col-start-1 col-end-5 overflow-y-hidden	">
      {/* Buscador - Informacion User */}
      <SearchBarGeneral page={"App Settings"} />
      {/* Contenido */}
      <div>
        <div className="flex col-start-2 col-end-4 justify-center my-10">
          <p className="text-black text-2xl font-bold mr-1">Hello!</p>
          <span className="text-black text-2xl font-bold mr-1">Admin</span>
          <span className="text-black text-2xl font-bold">Ruben Tamez</span>
        </div>
        <div className="shadow-md grid grid-cols-6 grid-rows-8 h-full">
          <div className="bg-[#e0e0e0] col-start-2 col-end-6 grid grid-cols-6 grid-rows-8 p-6 rounded-lg shadow-md">
            <div className="col-start-2 col-end-6 row-start-1 row-end-3">
              <div className="bg-[#DB0909] rounded-lg lg:h-20 h-28 flex justify-center items-center shadow-md">
                <Link href="/accountinfo">
                  <p className="text-lg text-white py-7 px-32">Account Info</p>
                </Link>
              </div>
            </div>
            <div className="col-start-2 col-end-6 row-start-4 row-end-6">
              <div className="bg-[#DB0909] rounded-lg lg:h-20 h-28 flex justify-center items-center shadow-md">
                <Link href="/createuser">
                  <p className="text-lg text-white py-7 px-32">Create User</p>
                </Link>
              </div>
            </div>
            <div className="col-start-2 col-end-6 row-start-7 row-end-9">
              <div className="bg-[#DB0909] rounded-lg lg:h-20 h-28 flex justify-center items-center shadow-md">
                <Link href="/manageuser">
                  <p className="text-lg text-white py-7 px-32">Manage User</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appsettings;
