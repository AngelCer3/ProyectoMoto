import { tallerApi } from "@/api/tallerApi";
import { AppDispatch, RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { GetStaticPaths, GetStaticProps } from "next";
import { useEffect } from "react";
import { startObtenerMotosPorCliente } from "@/store/slices/moto/thunks";
import Link from "next/link";
import { startEliminarClienteCompleto } from "@/store/slices/cliente/thunks";

interface Props {
  cliente: any;
}

export default function Cliente({ cliente }: Props) {
  const { cliente: datos } = cliente;
  const dispatch: AppDispatch = useDispatch();
  const { motoCliente } = useSelector((state: RootState) => state.moto);

  useEffect(() => {
    dispatch(startObtenerMotosPorCliente(datos._id));
  }, []);
  const handleEliminarDatos = (id: any) => {
    dispatch(startEliminarClienteCompleto(datos._id));
  };
  return (
    <div className="container flex flex-col mx-auto items-center justify-center mb-22 text-center font-bold my-20">
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-pink-800 dark:border-pink-700 mt-3">
        <h1 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-2">
          Clientes
        </h1>
        <div>
          <button
            type="button"
            className="bg-gray-700 hover.bg-gray-700 text-white w-60 h-12 block rounded-lg"
            onClick={() => handleEliminarDatos(datos._id)}
          >
            Eliminar
          </button>
        </div>

        <div className="mb-4">
          <div>
            <div>
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-2"
                htmlFor=""
              >
                Nombres
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="nombre"
                type="text"
                value={datos.nombres}
                readOnly
              />
            </div>
            <div>
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-2"
                htmlFor=""
              >
                Apellidos
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="apellido"
                type="text"
                value={datos.apellidos}
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
                Telefono
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="nombre"
                type="text"
                value={datos.telefono}
                readOnly
              />
            </div>
            <div>
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-2"
                htmlFor=""
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                value={datos.email}
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
              Direccion{" "}
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="direccion"
              type="text"
              value={datos.direccion}
              readOnly
            />
          </div>
          <div>
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-2"
              htmlFor=""
            >
              WhatsApp
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="whatsapp"
              type="text"
              readOnly
              value={datos.whatsapp}
            />
          </div>
        </div>
        <div className="flex flex-wrap">
          {motoCliente.map((moto) => (
            <>
              <div className="block grow w-1/2 px-6 py-3 bg-gray-400 border border-gray-300 rounded-lg shadow mt-2">
                {moto.marca}
                <div>
                  <Link href={`/motos/${moto._id}`}>
                    <button
                      type="button"
                      className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                    >
                      Ver
                    </button>
                  </Link>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await tallerApi.get("/clientes");

  return {
    paths: response.data.clientes.map((id: any) => ({
      params: { id: id._id },
    })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };
  const cliente = await tallerApi.get(`/clientes/busqueda/id/${id}`);

  const { data } = cliente;

  return {
    props: {
      cliente: data,
    },
  };
};
