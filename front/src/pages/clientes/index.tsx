import { startEliminarClienteCompleto, startObtenerClientes } from "@/store/slices/cliente/thunks";
import { AppDispatch, RootState } from "@/store/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
export default function page() {
  const dispatch: AppDispatch = useDispatch();

  const { clientes } = useSelector((state: RootState) => state.cliente);

  useEffect(() => {
    dispatch(startObtenerClientes());
  }, []);
  return (
    <div>
      <div className="mt-20 container mx-auto flex flex-col">
        <h1 className="text-lg md:text-xl xl:text-2xl text-center font-extrabold text-dark-700">
          {" "}
          Clientes
        </h1>
      </div>
      <div className="relative overflow-x auto mt-5">
        <table className="w-full text-sm text-center">
          <thead className="text-xs">
            <tr>
              <th scope="col" className="px-6 py-3">
                Ver
              </th>
              <th scope="col" className="px-6 py-3">
                Nombres
              </th>
              <th scope="col" className="px-6 py-3">
                Apellidos
              </th>
              <th scope="col" className="px-6 py-3">
                Telefono
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Direccion
              </th>
              <th scope="col" className="px-6 py-3">
                WhatsApp
              </th>
              <th scope="col" className="px-6 py-3">
                Actualizar
              </th>
            </tr>
          </thead>
          <tbody>
            {
            clientes.map((cliente) => {
              return (
                <tr>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                    <Link href={`./clientes/${cliente._id}`}>
                    <button
                      type="button"
                      className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                      >
                      Ver
                    </button>
                    </Link>
                  </th>
                  <td className="px-6 py-4">{cliente.nombres}</td>
                  <td className="px-6 py-4">{cliente.apellidos}</td>
                  <td className="px-6 py-4">{cliente.telefono}</td>
                  <td className="px-6 py-4">{cliente.email}</td>
                  <td className="px-6 py-4">{cliente.direccion}</td>
                  <td className="px-6 py-4">{cliente.whatsapp}</td>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                    <Link href={`./clientes/actualizar/${cliente._id}`}>
                    <button
                      type="button"
                      className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
                      >
                      Actualizar
                    </button>
                    </Link>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
