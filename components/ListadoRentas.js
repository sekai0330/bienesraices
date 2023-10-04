import { IconBed, IconToilet, IconCar } from "./Icons";
import Link from "next/link";

export default function ListadoRentas({ rentas }) {

    return (
        <section className="max-w-screen-xl mx-auto md:w-5/6 ">
            <h2 className="uppercase text-3xl font-medium text-center  md:text-left">Propiedades Destacadas</h2>

            <div className="grid place-content-center md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20 md:mx-0 mx-3 mt-10">
                {rentas.map(renta => (
                    <div key={renta.id} className="rounded-lg shadow-lg shadow-slate-400 p-3 space-y-2">
                        <Link legacyBehavior href={`/${renta.url}`}>
                            <a>
                                <img 
                                    src={`/img/${renta.imagen}.jpg`}  
                                    alt={`imagen de ${renta.nombre}`}
                                    className="block h-auto w-auto object-cover object-center rounded-t-lg"
                                />
                            </a>
                        </Link>
                        <div className="flex items-center justify-between">
                            <h3 className="text-orange-600 font-bold">{renta.tipo}</h3>
                            <p className="text-orange-600 font-extrabold">${renta.precio}</p>
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
                                <p>{renta.garages}</p>
                            </li>
                            <li className="flex items-center gap-2">
                                <IconBed/>
                                <p>{renta.habitaciones}</p>
                            </li>
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    )
}