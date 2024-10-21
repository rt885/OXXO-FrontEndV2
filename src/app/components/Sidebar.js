"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Sidebar = () => {
  // Estado para controlar la visibilidad del sidebar
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="col-start-1 col-end-2 w-full">
      {/* Botón para abrir el sidebar */}
      <button
        className="p-2 text-white bg-red-600 w-full lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      {/* Sidebar con control de visibilidad */}
      <div
        className={`bg-[#C92D20] fixed h-screen w-64 z-30 lg:translate-x-0 lg:relative ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:transition-none`}
      >
        <div className="flex flex-col justify-between h-full w-full">
          <div className="flex flex-col items-center">
            <div className="mt-10 mb-20">
              <Image
                src="/images/logo.png"
                alt="Logo Retail Sync"
                width={200}
                height={200}
              />
            </div>
            <div className="lg:mb-48">
              <Link href="/">
                <p className="mb-5 text-lg text-white cursor-pointer">
                  Data Dashboard
                </p>
              </Link>
              <Link href="/management">
                <p className="mb-5 text-lg text-white cursor-pointer">
                  ESL Management
                </p>
              </Link>
              <Link href="/productlist">
                <p className="mb-5 text-lg text-white cursor-pointer">
                  Product List
                </p>
              </Link>
              <Link href="/appsettings">
                <p className="mb-5 text-lg text-white cursor-pointer">
                  Settings
                </p>
              </Link>
            </div>
          </div>
          <div className="m-auto">
            <Image
              src="/images/oxxo_logo.png"
              alt="Logo de OXXO"
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
