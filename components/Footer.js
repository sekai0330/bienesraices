import Link from "next/link"
import Image from "next/image"
import Redes from "./Redes"

export default function Footer() {

    return (
        <div className="bg-slate-900 rounded-t-3xl">
            <div className="max-w-screen-xl grid md:grid-cols-3 md:justify-items-end mx-auto md:w-5/6 lg:w-5/6 px-3 md:px-0 pb-5">
                <div className="flex flex-col md:items-start items-center">
                    <Link legacyBehavior href="/">
                        <a>
                            <Image src="/img/logo.svg" width={200} height={70} alt="Logo Bienes Raices" />
                        </a>
                    </Link>
                    <p className="text-white [text-wrap:balance] text-sm pb-4 text-center md:text-start">Un equipo de expertos te guiará en todo el proceso, déjanos todo en nuestras manos</p>
                    <Redes />
                </div>
                <div className="flex flex-col md:items-start items-center">
                    <h3 className="text-white uppercase font-semibold mt-5">Enlaces Rapidos</h3>
                    <ul className="flex flex-col items-center md:items-start space-y-2.5 mt-4">
                        <li>
                            <Link legacyBehavior href="/">
                                <a
                                    className="border-b-2 border-transparent text-white text-sm hover:border-white transition-all duration-300"
                                >
                                    Inicio
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link legacyBehavior href="/ventas">
                                <a
                                    className="border-b-2 border-transparent text-white text-sm hover:border-white transition-all duration-300"
                                >
                                    Ventas
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link legacyBehavior href="/rentas">
                                <a
                                    className="border-b-2 border-transparent text-white text-sm hover:border-white transition-all duration-300"
                                >
                                    Rentas
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link legacyBehavior href="/about">
                                <a
                                    className="border-b-2 border-transparent text-white text-sm hover:border-white transition-all duration-300"
                                >
                                    ¿Quienes Somos?
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link legacyBehavior href="/tuventa">
                                <a
                                    className="border-b-2 border-transparent text-white text-sm hover:border-white transition-all duration-300"
                                >
                                    Vende tu propiedad
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link legacyBehavior href="/contacto">
                                <a
                                    className="border-b-2 border-transparent text-white text-sm hover:border-white transition-all duration-300"
                                >
                                    Contactanos
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link legacyBehavior href="/privacidad">
                                <a
                                    className="border-b-2 border-transparent text-white text-sm hover:border-white transition-all duration-300"
                                >
                                    Aviso de Privacidad
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col md:items-start items-center">
                    <h3 className="text-white uppercase font-semibold mt-5">Contactanos</h3>
                    <ul className="flex flex-col space-y-2.5 mt-4">
                        <li>
                            <p className="text-white text-sm font-semibold">Correo Electronico:</p>
                            <p className="text-white text-sm">correo@correo.com</p>
                        </li>
                        <li>
                            <p className="text-white text-sm font-semibold">Telefono/Whatsapp:</p>
                            <p className="text-white text-sm">123 456 789</p>
                        </li>
                        <li>
                            <p className="text-white text-sm font-semibold">Direccion:</p>
                            <p className="text-white text-sm">Mexico, Mexico</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="max-w-screen-xl flex items-center justify-center mx-auto lg:w-5/6 p-3 md:pl-0 border-t-2">
                <hr />
                <p className="text-white text-sm py-1">&copy; Bienes Raices - Todos los derechos reservados</p>
            </div>
        </div>
    )
}