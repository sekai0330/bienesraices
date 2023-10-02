import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { MenuIcon, XIcon } from "../components/Icons";

export default function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter();
    const toggleMenu = () => {
        setIsMenuOpen(prevIsMenuOpen => !prevIsMenuOpen);
    };

    return(
        <nav className="bg-blue-700 relative">
                <div className="max-w-screen-xl flex items-center justify-between mx-auto lg:w-5/6 p-3 md:pl-0">
                    <Link legacyBehavior href="/">
                        <a className="flex items-center">
                            <Image src="/img/logo.svg" width={200} height={70} alt="Logo Bienes Raices" />
                        </a>
                    </Link>
                    <button
                    onClick={toggleMenu}
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg lg:hidden"
                    aria-controls="navbar-default"
                    aria-expanded={isMenuOpen}
                    >
                    <span className="sr-only">Open main menu</span>
                    {isMenuOpen ? (
                        <XIcon className="w-6 h-6 text-white" aria-hidden="true" />
                    ) : (
                        <MenuIcon className="w-6 h-6 text-white" aria-hidden="true" />
                    )}
                    </button>
                    <div
                    className={`absolute top-full left-0 px-1 pb-1 w-full lg:w-auto ${
                        isMenuOpen ? 'block' : 'hidden'
                    } transition-all duration-500 ease-in-out bg-blue-700 lg:flex lg:items-center lg:space-x-8  lg:relative lg:bg-transparent`}
                    id="navbar-default"
                    >
                        <ul className="flex flex-col gap-3 lg:gap-0 my-4 lg:flex-row lg:space-x-0 lg:space-x-2 lg:border-0">
                            <li>
                                <Link legacyBehavior href="/">
                                    <a
                                        className={`mt-4 py-1 md:py-2.5 px-3 ml-5 md:mt-0 md:px-0 border-b-4 border-transparent text-white hover:border-white transition-all duration-300 ${
                                        router.pathname === '/' && ' border-white'
                                        }`}
                                    >
                                        Inicio
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link legacyBehavior href="/ventas">
                                    <a
                                        className={`mt-4 py-1 md:py-2.5 px-3 ml-5 md:mt-0 md:px-0 border-b-4 border-transparent text-white hover:border-white transition-all duration-300  ${
                                        router.pathname === '/ventas' && 'border-white'
                                        }`}
                                    >
                                        Ventas
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link legacyBehavior href="/rentas">
                                    <a
                                        className={`mt-4 py-1 md:py-2.5 px-3 ml-5 md:mt-0 md:px-0 border-b-4 border-transparent text-white hover:border-white hover:border-b-4 transition-all duration-300 ${
                                        router.pathname === '/rentas' && 'border-white'
                                        }`}
                                    >
                                        Rentas
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link legacyBehavior href="/about">
                                    <a
                                        className={`mt-4 py-1 md:py-2.5 px-3 ml-5 md:mt-0 md:px-0 border-b-4 border-transparent text-white hover:border-white hover:border-b-4 transition-all duration-300 ${
                                        router.pathname === '/about' && 'border-white'
                                        }`}
                                    >
                                        ¿Quienes Somos?
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link legacyBehavior href="/tuventa">
                                    <a
                                        className={`mt-4 py-1 md:py-2.5 px-3 ml-5 md:mt-0 md:px-0 border-b-4 border-transparent text-white hover:border-white transition-all duration-300 ${
                                        router.pathname === '/tuventa' && 'border-white'
                                        }`}
                                    >
                                        Vende tu propiedad
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link legacyBehavior href="/contacto">
                                    <a
                                        className={`mt-4 py-1 md:py-2.5 px-3 ml-5 md:mt-0 md:px-0 border-b-4 border-transparent text-white hover:border-white transition-all duration-300 ${
                                        router.pathname === '/contacto' && 'border-white'
                                        }`}
                                    >
                                        Contactanos
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link legacyBehavior href="/privacidad">
                                    <a
                                        className={`mt-4 py-1 md:py-2.5 px-3 ml-5 md:mt-0 md:px-0 border-b-4 border-transparent text-white hover:border-white transition-all duration-300 ${
                                        router.pathname === '/privacidad' && 'border-white'
                                        }`}
                                    >
                                        Aviso de Privacidad
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    )
}