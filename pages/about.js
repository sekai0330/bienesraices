import Layout from "../layout/Layout"
import { aboutData } from "../data/aboutData"
import Link from "next/link"

export default function About() {
    return (
        <Layout
            title={'Quienes Somos?'}
        >
            <div className="md:w-5/6 lg:w-5/6 mx-auto max-w-screen-xl py-20 px-3 lg:px-0">
                <section>
                    <h2 className="uppercase text-3xl font-medium text-center md:text-left">Acerca de Nosotros | Bienes Raices</h2>

                    <div className="flex flex-col lg:flex-row gap-5 items-center pt-10 ">
                        <div className=" lg:w-2/5">
                            <img 
                                src="/img/about.webp"  
                                alt="imagen sobre Nosotros"
                                className="block h-auto w-auto object-cover object-center rounded-t-lg"
                            />
                        </div>
                        <div className="lg:w-3/5 space-y-6 text-lg">
                            <p className="">En [Nombre de tu empresa], somos apasionados por hacer que tus sueños de bienes raíces se hagan realidad. Nuestra misión es proporcionarte seguridad, precio y tiempo en cada paso de tu viaje inmobiliario. Con años de experiencia en el mercado, nuestro equipo se esfuerza por ofrecer propiedades de calidad a precios justos. </p>
                            <p className="">Nos comprometemos a agilizar el proceso para que encuentres la propiedad perfecta sin perder tiempo. En [Nombre de tu empresa], tu satisfacción es nuestra prioridad, y estamos aquí para ayudarte a tomar decisiones informadas y exitosas en el emocionante mundo de los bienes raíces. ¡Bienvenido a tu nuevo hogar!</p>
                            <div className="flex items-center justify-center lg:justify-start">
                                <Link legacyBehavior href='/contacto'>
                                    <a 
                                        className="bg-botones hover:bg-botoneshover transition-colors text-white mt-5 md:mt-0 py-3 px-10 uppercase font-bold rounded-md"
                                    >
                                        Contactanos
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-20">
                        {aboutData.map( about => (
                            <div key={about.id} className="flex flex-col items-center text-center space-y-3">
                                <img 
                                    src={`/img/${about.imagen}.svg`}  
                                    alt={`imagen de ${about.nombre}`}
                                    className="block w-24 rounded-t-lg"
                                />
                                <h3 className="text-2xl uppercase font-semibold pt-3">{about.nombre}</h3>
                                <p>{about.descripcion}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </Layout>
    )
}