import { useState, useEffect } from "react";
import { IconBed, IconToilet, IconCar } from "./Icons";
import Link from "next/link";

function divideVentasEnPaginas(ventas, propiedadesPorPagina) {
    const paginas = [];
    for (let i = 0; i < ventas.length; i += propiedadesPorPagina) {
        paginas.push(ventas.slice(i, i + propiedadesPorPagina));
    }
    return paginas;
}

export default function ListadoVentas({ ventas }) {

    const propiedadesPorPagina = 9;
    const [paginaActual, setPaginaActual] = useState(1);
    const [propiedadesFiltradas, setPropiedadesFiltradas] = useState([]);

    // Actualiza la página actual cuando cambian las propiedades o al filtrar
    useEffect(() => {
        setPaginaActual(1); // Restablece la página actual al 1
    }, [ventas, propiedadesFiltradas]);

    const paginas = divideVentasEnPaginas(
        propiedadesFiltradas.length > 0 ? propiedadesFiltradas : ventas,
        propiedadesPorPagina
    );
    const propiedadesEnPagina = paginas[paginaActual - 1] || []; // Verificación  
    
    const scrollToTop = () => {
        window.scrollTo({ top: 300, behavior: "smooth" }); // Scroll suave a la parte superior
    };

    const goToNextPage = () => {
        if (paginaActual < paginas.length) {
          setPaginaActual(paginaActual + 1);
          scrollToTop();
        }
    };
      
      const goToPrevPage = () => {
        if (paginaActual > 1) {
          setPaginaActual(paginaActual - 1);
          scrollToTop();
        }
    };

    return (
        <section className="max-w-screen-xl mx-auto md:w-5/6 ">
            <h2 className="uppercase text-3xl font-medium text-center  md:text-left">Propiedades En Venta</h2>

            <div className="grid place-content-center md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20 md:mx-0 mx-3 mt-10">
                {propiedadesEnPagina.map(venta => (
                    <div key={venta.id} className="rounded-lg shadow-lg shadow-slate-400 p-3 space-y-2">
                        <Link legacyBehavior href={`/ventas/${venta.url}`}>
                            <a>
                                <img 
                                    src={`/img/${venta.imagen}.jpg`}  
                                    alt={`imagen de ${venta.nombre}`}
                                    className="block h-auto w-auto object-cover object-center rounded-t-lg"
                                />
                            </a>
                        </Link>
                        <div className="flex items-center justify-between">
                            <h3 className="text-orange-600 font-bold">{venta.tipo}</h3>
                            <p className="text-orange-600 font-extrabold">${venta.precio}</p>
                        </div>
                        <div>
                            <h3 className="text-lg text-center font-semibold">{venta.nombre}</h3>
                            <p className="text-base font-serif">{venta.descripcion}</p>
                        </div>
                        <ul className="flex items-center justify-evenly">
                            <li className="flex items-center gap-2">
                                <IconToilet/>
                                <p>{venta.bathroom}</p>
                            </li>
                            <li className="flex items-center gap-2">
                                <IconCar/>
                                <p>{venta.garage}</p>
                            </li>
                            <li className="flex items-center gap-2">
                                <IconBed/>
                                <p>{venta.habitaciones}</p>
                            </li>
                        </ul>
                    </div>
                ))}

            </div>

                {/* Agrega controles de paginación */}
            <div className="flex justify-center pb-10">
                <button
                    onClick={goToPrevPage}
                    className={`${
                    paginaActual === 1 ? "bg-gray-300 text-gray-500" : "bg-orange-500 text-white"
                    } px-4 py-2 mx-2 rounded-md`}
                >
                    Anterior
                </button>
                {paginas.map((_, index) => (
                <button
                    key={index}
                    onClick={() => {
                        setPaginaActual(index + 1);
                        scrollToTop();
                    }}
                    className={`${
                    index + 1 === paginaActual
                        ? "bg-orange-500 text-white"
                        : "bg-gray-300 text-black"
                    } px-4 py-2 mx-2 rounded-md`}
                >
                    {index + 1}
                </button>
                ))}
                <button
                    onClick={goToNextPage}
                    className={`${
                    paginaActual === paginas.length
                        ? "bg-gray-300 text-gray-500"
                        : "bg-orange-500 text-white"
                    } px-4 py-2 mx-2 rounded-md`}
                >
                    Siguiente
                </button>
            </div>

        </section>
    )
}