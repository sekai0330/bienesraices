import { IconBed, IconToilet, IconCar } from "./Icons";
import Link from "next/link";

export default function ListadoVentas({ ventas }) {

    return (
        <section className="max-w-screen-xl mx-auto md:w-5/6 ">
            <h2 className="uppercase text-3xl font-medium text-center  md:text-left">Propiedades En Venta</h2>

            <div className="grid place-content-center md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20 md:mx-0 mx-3 mt-10">
                {ventas.map(venta => (
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
        </section>
    )
}