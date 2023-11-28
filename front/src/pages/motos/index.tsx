import { startObtenerMotos } from "@/store/slices/moto/thunks";
import { AppDispatch, RootState } from "@/store/store";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function page() {
  const dispatch: AppDispatch = useDispatch();

  const { motos } = useSelector((state: RootState) => state.moto);

  useEffect(() => {
    dispatch(startObtenerMotos());
  }, []);

  return (
    <div>
      <div className="mt-20 container mx-auto flex flex-col">
        <h1 className="text-lg md:text-xl xl:text-2xl text-center font-extrabold text-dark-700">
          Motos
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
                Marca
              </th>
              <th scope="col" className="px-6 py-3">
                Modelo
              </th>
              <th scope="col" className="px-6 py-3">
                Cilindrada
              </th>
              <th scope="col" className="px-6 py-3">
                Placa
              </th>
              <th scope="col" className="px-6 py-3">
                Color
              </th>
              <th scope="col" className="px-6 py-3">
                Tipo
              </th>
              <th scope="col" className="px-6 py-3">
                Actualizar
              </th>
            </tr>
          </thead>
          <tbody>
            {motos.map((moto) => {
              return (
                <tr>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                     <Link href={`./motos/${moto._id}`}>
                    <button
                      type="button"
                      className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                      >
                      Ver
                    </button>
                    </Link>
                  </th>
                  <td className="px-6 py-4">{moto.marca}</td>
                  <td className="px-6 py-4">{moto.modelo}</td>
                  <td className="px-6 py-4">{moto.cilindrada}</td>
                  <td className="px-6 py-4">{moto.placa}</td>
                  <td className="px-6 py-4">{moto.color}</td>
                  <td className="px-6 py-4">{moto.tipo}</td>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                     <Link href={`./motos/actualizar/${moto._id}`}>
                    <button
                      type="button"
                      className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
                      >
                      Actualizar
                    </button>
                    </Link>
                  </th>
                  \
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
