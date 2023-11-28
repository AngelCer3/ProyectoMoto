import { AppDispatch, RootState } from "@/store/store";
import { startProximoServicio } from "@/store/slices/servicio/thunks";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function page() {

  const dispatch: AppDispatch = useDispatch();

  const { servicios } = useSelector((state: RootState) => state.servicio);

  useEffect(() => {

    dispatch(startProximoServicio());
  }, []);
  return (
    <div>
      <div className="mt-20 container mx-auto flex flex-col">
        <h1 className="text-lg md:text-xl xl:text-2xl text-center font-extrabold text-dark-700">
          {" "}
          Proximos Servicios
        </h1>
      </div>
      <div className="relative overflow-x auto mt-5">
        <table className="w-full text-sm text-center">
          <thead className="text-xs">
            <tr>
              <th scope="col" className="px-6 py-3">
                Proximo Servicio
              </th>
              <th scope="col" className="px-6 py-3">
                Moto
              </th>
              <th scope="col" className="px-6 py-3">
                Cliente
              </th>
            </tr>
          </thead>
          <tbody>
            {servicios.map((service) => {
              return (
                <tr>
                 
                  <td className="px-6 py-4">{service.proximo}</td>
                  <td className="px-6 py-4">{service.moto.modelo}</td>
                  <td className="px-6 py-4">{service.moto.cliente.nombres} {service.moto.cliente.apellidos}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
