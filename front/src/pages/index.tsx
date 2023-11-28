import Link from "next/link";
import React from 'react'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-3 font-serif bg-gray-300">
      <Link href="/nuevo">
        <button className="bg-gray-900 text-white py-2 px-3 mt-2 w-60 h-12 block rounded-lg">
          Nuevo Servicio
        </button>
      </Link>

      <Link href="/clientes">
        <button className="bg-gray-900 text-white py-2 px-3 mt-2 w-60 h-12 block rounded-lg">
          Clientes
        </button>
      </Link>

      <Link href="/motos">
        <button className="bg-gray-900 text-white py-2 px-3 mt-2 w-60 h-12 block rounded-lg">
          Motos
        </button>
      </Link>

      <Link href="/servicios">
        <button className="bg-gray-900 text-white py-2 px-3 mt-2 w-60 h-12 block rounded-lg">
          Servicios
        </button>
      </Link>

      <Link href="/proxServicios">
        <button className="bg-gray-900 text-white py-2 px-3 mt-2 w-60 h-12 block rounded-lg">
          Proximos Servicios
        </button>
      </Link>
    </div>
  );
}