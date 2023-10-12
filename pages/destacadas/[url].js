import { useRouter } from "next/router"
import useFilters from "../../hooks/useFilter";
import Layout from "../../layout/Layout";
import Formulario from "../../components/Formulario";
import Carousel from "../../components/Carousel";

export default function Venta() {

    const router = useRouter()
    const { url } = router.query;
    const { destacadas } = useFilters()
    
    const sale = destacadas.destacadas.find((destacada) => destacada.url === url);

    if (!sale) {
        return <div>Venta no encontrada</div>;
    }

    return (
        <Layout
            title={`${sale.nombre}`}
            description={`${sale.direccion}`}
        >
            <div className="max-w-screen-xl mx-auto md:w-5/6 lg:w-5/6 px-3 md:px-0 my-10">
                <div className="flex flex-col gap-4 md:flex-row items-center justify-between">
                    <div>
                        <h2 className="uppercase text-3xl font-medium text-center md:text-left">{`${sale.tipo} en venta: ${sale.nombre}`}</h2>
                        <p className="text-xl">{`${sale.direccion}, ${sale.ubicacion}`}</p>
                    </div>
                    <p className="text-5xl font-bold text-orange-500">{`$${sale.precio}`}</p>
                </div>

                <div className="mt-5">
                    <Carousel images={sale.imagenes} />
                </div>

                <div className="mt-5">
                    
                    <ul className="grid grid-cols-2 gap-4 md:grid-cols-4 place-items-center text-center mt-5 p-2 border border-slate-500 rounded-3xl bg-orange-100">
                        <li>
                            <p className="text-2xl font-bold">{`${sale.habitaciones}`}</p>
                            <p className="uppercase text-sm">Habitaciones</p>
                        </li>
                        <li>
                            <p className="text-2xl font-bold">{`${sale.bathroom}`}</p>
                            <p className="uppercase text-sm">baños</p>
                        </li>
                        <li>
                            <p className="text-2xl font-bold">{`${sale.garage}`}</p>
                            <p className="uppercase text-sm">Estacionamientos</p>
                        </li>
                        <li>
                            <p className="text-2xl font-bold">{`${sale.perimetro} m`}<sup>2</sup></p>
                            <p className="uppercase text-sm">perimetro</p>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col lg:flex-row gap-5 mt-10">
                    <div className="lg:w-2/3 flex flex-col space-y-6 [text-wrap:balance]">
                        <div className="flex flex-col md:flex-row gap-5 border-b-4 border-orange-100 pb-4 ">
                            <div className="md:w-2/6 lg:w-1/4 mb-4">
                                <h3 className="text-xl font-medium">Descripcion:</h3>
                            </div>
                            <div className="md:w-4/6 lg:w-3/4 space-y-4">
                                {sale.descripcionLarga.map((descripcion, index) => (
                                    <p key={index} >{descripcion}</p>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row">
                            <div className="md:w-2/6 lg:w-1/4 mb-4">
                                <h3 className="text-xl font-medium">Caracteristicas:</h3>
                            </div>
                            <div className="md:w-4/6 lg:w-3/4 space-y-2">
                                {sale.caracteristicas.map((caracteristica, index) => (
                                    <li key={index} >{caracteristica}</li>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 mt-8 lg:mt-0">
                        <Formulario />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

