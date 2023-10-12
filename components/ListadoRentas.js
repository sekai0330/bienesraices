import { useState, useEffect } from "react";
import { IconBed, IconToilet, IconCar } from "./Icons";
import Link from "next/link";

function divideRentasEnPaginas(rentas, propiedadesPorPagina) {
    const paginas = [];
    for (let i = 0; i < rentas.length; i += propiedadesPorPagina) {
        paginas.push(rentas.slice(i, i + propiedadesPorPagina));
    }
    return paginas;
}

export default function ListadoRentas({ rentas }) {
    const propiedadesPorPagina = 9;
    const [paginaActual, setPaginaActual] = useState(1);
    const [propiedadesFiltradas, setPropiedadesFiltradas] = useState([]);

    // Actualiza la página actual cuando cambian las propiedades o al filtrar
    useEffect(() => {
        setPaginaActual(1); // Restablece la página actual al 1
    }, [rentas, propiedadesFiltradas]);

    const paginas = divideRentasEnPaginas(
        propiedadesFiltradas.length > 0 ? propiedadesFiltradas : rentas,
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
            <h2 className="uppercase text-3xl font-medium text-center  md:text-left">Propiedades En Renta</h2>

            <div className="grid place-content-center md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20 md:mx-0 mx-3 mt-10">
                {propiedadesEnPagina.map(renta => (
                    <div key={renta.id} className="rounded-lg shadow-lg shadow-textgris p-3 space-y-2">
                        <Link legacyBehavior href={`/rentas/${renta.url}`}>
                            <a>
                                <img 
                                    src={`/img/${renta.imagen}.jpg`}  
                                    alt={`imagen de ${renta.nombre}`}
                                    className="block h-auto w-auto object-cover object-center rounded-t-lg"
                                />
                            </a>
                        </Link>
                        <div className="flex items-center justify-between">
                            <h3 className="text-botoneshover font-bold">{renta.tipo}</h3>
                            <p className="text-precio text-2xl font-extrabold">${renta.precio}</p>
                        </div>
                        <div>
                            <h3 className="text-lg text-center font-semibold">{renta.nombre}</h3>
                            <p className="text-base font-serif">{renta.descripcion}</p>
                        </div>
                        <ul className="flex items-center justify-evenly">
                            <li className="flex items-center gap-2">
                                <IconToilet/>
                                <p>{renta.bathroom}</p>
                            </li>
                            <li className="flex items-center gap-2">
                                <IconCar/>
                                <p>{renta.garage}</p>
                            </li>
                            <li className="flex items-center gap-2">
                                <IconBed/>
                                <p>{renta.habitaciones}</p>
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
                    paginaActual === 1 ? "bg-grisclaro text-textgris" : "bg-botones text-white"
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
                        ? "bg-botones text-white"
                        : "bg-grisclaro text-black"
                    } px-4 py-2 mx-2 rounded-md`}
                >
                    {index + 1}
                </button>
                ))}
                <button
                    onClick={goToNextPage}
                    className={`${
                    paginaActual === paginas.length
                        ? "bg-grisclaro text-textgris"
                        : "bg-botones text-white"
                    } px-4 py-2 mx-2 rounded-md`}
                >
                    Siguiente
                </button>
            </div>
        </section>
    )
}