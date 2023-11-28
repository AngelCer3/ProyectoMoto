import { tallerApi } from "@/api/tallerApi";
import { AppDispatch, RootState } from "@/store/store";
import { GetStaticPaths, GetStaticProps } from "next";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { startObtenerServicioPorMoto } from "@/store/slices/servicio/thunks";
import Link from "next/link";
import { startEliminarMoto } from "@/store/slices/moto/thunks";

interface Props {
  moto: any;
}

export default function Moto({ moto }: Props) {
  const { moto: datos } = moto;
  const dispatch: AppDispatch = useDispatch();
  const { servicios } = useSelector((state: RootState) => state.servicio);

  useEffect(() => {
    dispatch(startObtenerServicioPorMoto(datos._id));
  }, []);

  const handleEliminarDatos = (id: any) => {
    dispatch(startEliminarMoto(datos._id));
  };
  return (
    <div className="container flex flex-col mx-auto items-center justify-center mb-22 text-center font-bold my-20">
      <div className="mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-cyan-600 dark:border-cyan-500 text-center">
        <h3 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-2">
          Moto
        </h3>
        <div className="mb-4">
          <div>
            <div>
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-4"
                htmlFor=""
              >
                Marca
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="marcas"
                type="text"
                readOnly
                value={datos.marca}
              />
            </div>
            <div>
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-2"
                htmlFor=""
              >
                Modelo
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="modelo"
                type="text"
                value={datos.modelo}
                readOnly
              />
            </div>
          </div>
          <div>
            <div>
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-2"
                htmlFor=""
              >
                Cilindrada
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="cilindrada"
                type="text"
                value={datos.cilindrada}
                readOnly
              />
            </div>
            <div>
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-2"
                htmlFor=""
              >
                Placa
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="placa"
                type="placa"
                value={datos.placa}
                readOnly
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-2"
              htmlFor=""
            >
              {" "}
              Color{" "}
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="color"
              type="text"
              value={datos.color}
              readOnly
            />
          </div>
          <div>
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-2"
              htmlFor=""
            >
              Tipo
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="tipo"
              type="text"
              value={datos.tipo}
            />
          </div>
          <div>
            <button
              type="button"
              className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 mt-3"
              onClick={() => handleEliminarDatos(datos._id)}
            >
              Eliminar Datos
            </button>
          </div>
        </div>
        <div className="relative overflow-x auto mt-5">
          <table>
            <thead>
              <tr>
                <th scope="col" className="px-6 py-3">
                  Ver
                </th>
                <th scope="col" className="px-6 py-3">
                  Servicio
                </th>
                <th scope="col" className="px-6 py-3">
                  Kilometraje
                </th>
                <th scope="col" className="px-6 py-3">
                  Observaciones
                </th>
              </tr>
            </thead>

            <tbody>
              {servicios.map((servicio) => (
                <>
                  <tr>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <Link href={`/servicios/${servicio._id}`}>
                        <button
                          type="button"
                          className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                        >
                          Ver
                        </button>
                      </Link>
                    </th>
                    <td className="px-6 py-4">{servicio.concepto}</td>
                    <td className="px-6 py-4">{servicio.kilometraje}</td>
                    <td className="px-6 py-4">{servicio.observaciones}</td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await tallerApi.get("/motos");

  return {
    paths: response.data.motos.map((id: any) => ({
      params: { id: id._id },
    })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };
  const moto = await tallerApi.get(`motos/${id}`);

  const { data } = moto;

  return {
    props: {
      moto: data,
    },
  };
};
