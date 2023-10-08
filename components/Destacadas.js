import Link from "next/link"
import { IconBed, IconCar, IconToilet } from "./Icons"
import useFilters from "../hooks/useFilter"

export default function Destacadas() {

    const { destacadas } = useFilters()

    return (
        <section className="max-w-screen-xl mx-auto md:w-5/6 ">
            <h2 className="uppercase text-3xl font-medium text-center  md:text-left">Propiedades Destacadas</h2>

            <div className="grid place-content-center md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20 md:mx-0 mx-3 mt-10">
                {destacadas.destacadas.map(destacada => (
                    <div key={destacada.id} className="rounded-lg shadow-lg shadow-slate-400 p-3 space-y-2">
                        <Link legacyBehavior href={`/destacadas/${destacada.url}`}>
                            <a>
                                <img 
                                    src={`/img/${destacada.imagen}.jpg`}  
                                    alt={`imagen de ${destacada.nombre}`}
                                    className="block h-auto w-auto object-cover object-center rounded-t-lg"
                                />
                            </a>
                        </Link>
                        <div className="flex items-center justify-between">
                            <h3 className="text-orange-600 font-bold">{destacada.tipo}</h3>
                            <p className="text-orange-600 font-extrabold">${destacada.precio}</p>
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
                                <p>{destacada.garages}</p>
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