import {
  startEliminarServicio,
  startObtenerServicio,
} from "@/store/slices/servicio/thunks";
import { AppDispatch, RootState } from "@/store/store";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function page() {
  const dispatch: AppDispatch = useDispatch();

  const { servicios } = useSelector((state: RootState) => state.servicio);

  useEffect(() => {
    dispatch(startObtenerServicio());
  }, []);

  const handleEliminarDatos = (id: any) => {
    dispatch(startEliminarServicio(id));
  };

  return (
    <div>
      <div className="mt-20 container mx-auto flex flex-col">
        <h1 className="text-lg md:text-xl xl:text-2xl text-center font-extrabold text-dark-700">
          Servicios
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
                Fecha
              </th>
              <th scope="col" className="px-6 py-3">
                Anticipo
              </th>
              <th scope="col" className="px-6 py-3">
                Kilometraje
              </th>
              <th scope="col" className="px-6 py-3">
                Combustible
              </th>
              <th scope="col" className="px-6 py-3">
                Concepto
              </th>
              <th scope="col" className="px-6 py-3">
                Presupuesto
              </th>
              <th scope="col" className="px-6 py-3">
                Observaciones
              </th>
              <th scope="col" className="px-6 py-3">
                Prox. Servicio
              </th>
              <th scope="col" className="px-6 py-3">
                Actualizar
              </th>
              <th scope="col" className="px-6 py-3">
                Eliminar
              </th>
            </tr>
          </thead>
          <tbody>
            {servicios.map((service) => {
              return (
                <tr>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <Link href={`./servicios/${service._id}`}>
                      <button
                        type="button"
                        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                      >
                        Ver
                      </button>
                    </Link>
                  </th>
                  <td className="px-6 py-4">{service.fecha}</td>
                  <td className="px-6 py-4">{service.anticipo}</td>
                  <td className="px-6 py-4">{service.kilometraje}</td>
                  <td className="px-6 py-4">{service.combustible}</td>
                  <td className="px-6 py-4">{service.concepto}</td>
                  <td className="px-6 py-4">{service.presupuesto}</td>
                  <td className="px-6 py-4">{service.observaciones}</td>
                  <td className="px-6 py-4">{service.proximo}</td>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <Link href={`./servicios/actualizar/${service._id}`}>
                      <button
                        type="button"
                        className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                      >
                        Actualizar
                      </button>
                    </Link>
                  </th>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <button
                      type="button"
                      className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                      onClick={() => handleEliminarDatos(service._id)}
                    >
                      Eliminar
                    </button>
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
