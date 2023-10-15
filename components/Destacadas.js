import Link from "next/link"
import { IconBed, IconCar, IconToilet } from "./Icons"
import useFilters from "../hooks/useFilter"

export default function Destacadas() {

    const { destacadas } = useFilters()

    // Filtrar solo las propiedades con el atributo "destacada" igual a "nueva"
    const propiedadesNuevas = destacadas.destacadas.filter(destacada => destacada.categoria === "nueva");
    const propiedadesVentas = destacadas.destacadas.filter(destacada => destacada.categoria === "venta");
    const propiedadesRentas = destacadas.destacadas.filter(destacada => destacada.categoria === "renta");

    return (
        <section className="max-w-screen-xl mx-auto md:w-5/6 ">
            <h2 className="uppercase text-3xl font-medium text-center  md:text-left">Propiedades Destacadas</h2>
            
            <div className="mt-8">
                <h2 className="uppercase text-2xl font-medium text-center md:text-left">Nuevas Propiedades</h2>
            </div>
            <div className="grid place-content-center md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14 md:mx-0 mx-3 mt-5">
                {propiedadesNuevas.map(destacada => (
                    <div key={destacada.id} className="rounded-lg shadow-lg shadow-textgris p-3 space-y-2">
                        <Link legacyBehavior href={`/destacadas/${destacada.url}`}>
                            <a>
                                <img 
                                    src={`/img/${destacada.imagen}.webp`}  
                                    alt={`imagen de ${destacada.nombre}`}
                                    className="block h-56 w-full object-cover object-center rounded-t-lg"
                                />
                            </a>
                        </Link>
                        <div className="flex items-center justify-between">
                            <h3 className="text-botoneshover font-bold">{destacada.tipo}</h3>
                            <p className="text-precio text-2xl font-extrabold">${destacada.precio}</p>
                        </div>
                        <div>
                            <h3 className="text-lg text-center font-semibold">{destacada.nombre}</h3>
                            <p className="text-base font-serif">{destacada.descripcion}</p>
                        </div>
                        <ul className="flex items-center justify-evenly">
                            <li className="flex items-center gap-2">
                                <IconToilet/>
                                <p>{destacada.bathroom}</p>
                            </li>
                            <li className="flex items-center gap-2">
                                <IconCar/>
                                <p>{destacada.garage}</p>
                            </li>
                            <li className="flex items-center gap-2">
                                <IconBed/>
                                <p>{destacada.habitaciones}</p>
                            </li>
                        </ul>
                    </div>
                ))}
            </div>

            <div className="mt-8 flex flex-col md:flex-row items-center justify-between">
                <h2 className="uppercase text-2xl font-medium text-center md:text-left">Propiedades en Venta</h2>
                <Link legacyBehavior href='/ventas'>
                    <a 
                        className="flex items-center gap-2 justify-center hover:bg-botones border-2 border-botones transition-colors text-botones hover:text-white mt-5 md:mt-0 py-2 text-lg px-5 rounded-md"
                    >
                        ver mas ventas
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>
                    </a>
                </Link>
            </div>
            <div className="grid place-content-center md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14 md:mx-0 mx-3 mt-5">
                {propiedadesVentas.map(destacada => (
                    <div key={destacada.id} className="rounded-lg shadow-lg shadow-textgris p-3 space-y-2">
                        <Link legacyBehavior href={`/destacadas/${destacada.url}`}>
                            <a>
                                <img 
                                    src={`/img/${destacada.imagen}.webp`}  
                                    alt={`imagen de ${destacada.nombre}`}
                                    className="block h-56 w-full object-cover object-center rounded-t-lg"
                                />
                            </a>
                        </Link>
                        <div className="flex items-center justify-between">
                            <h3 className="text-botoneshover font-bold">{destacada.tipo}</h3>
                            <p className="text-precio text-2xl font-extrabold">${destacada.precio}</p>
                        </div>
                        <div>
                            <h3 className="text-lg text-center font-semibold">{destacada.nombre}</h3>
                            <p className="text-base font-serif">{destacada.descripcion}</p>
                        </div>
                        <ul className="flex items-center justify-evenly">
                            <li className="flex items-center gap-2">
                                <IconToilet/>
                                <p>{destacada.bathroom}</p>
                            </li>
                            <li className="flex items-center gap-2">
                                <IconCar/>
                                <p>{destacada.garage}</p>
                            </li>
                            <li className="flex items-center gap-2">
                                <IconBed/>
                                <p>{destacada.habitaciones}</p>
                            </li>
                        </ul>
                    </div>
                ))}
            </div>

            <div className="mt-8 flex flex-col md:flex-row items-center justify-between">
                <h2 className="uppercase text-2xl font-medium text-center  md:text-left">Propiedades en renta</h2>
                <Link legacyBehavior href='/ventas'>
                    <a 
                        className="flex items-center gap-2 justify-center hover:bg-botones border-2 border-botones transition-colors text-botones hover:text-white mt-5 md:mt-0 py-2 text-lg px-5 rounded-md"
                    >
                        ver mas rentas
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>
                    </a>
                </Link>
            </div>
            <div className="grid place-content-center md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14 md:mx-0 mx-3 mt-5">
                {propiedadesRentas.map(destacada => (
                    <div key={destacada.id} className="rounded-lg shadow-lg shadow-textgris p-3 space-y-2">
                        <Link legacyBehavior href={`/destacadas/${destacada.url}`}>
                            <a>
                                <img 
                                    src={`/img/${destacada.imagen}.webp`}  
                                    alt={`imagen de ${destacada.nombre}`}
                                    className="block h-56 w-full object-cover object-center rounded-t-lg"
                                />
                            </a>
                        </Link>
                        <div className="flex items-center justify-between">
                            <h3 className="text-botoneshover font-bold">{destacada.tipo}</h3>
                            <p className="text-precio text-2xl font-extrabold">${destacada.precio}</p>
                        </div>
                        <div>
                            <h3 className="text-lg text-center font-semibold">{destacada.nombre}</h3>
                            <p className="text-base font-serif">{destacada.descripcion}</p>
                        </div>
                        <ul className="flex items-center justify-evenly">
                            <li className="flex items-center gap-2">
                                <IconToilet/>
                                <p>{destacada.bathroom}</p>
                            </li>
                            <li className="flex items-center gap-2">
                                <IconCar/>
                                <p>{destacada.garage}</p>
                            </li>
                            <li className="flex items-center gap-2">
                                <IconBed/>
                                <p>{destacada.habitaciones}</p>
                            </li>
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    )
}
