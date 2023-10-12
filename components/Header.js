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
        <nav className="bg-header2 relative ">
                <div className="max-w-screen-xl flex items-center justify-between mx-auto lg:w-5/6 p-3 md:pl-0">
                    <Link legacyBehavior href="/">
                        <a className="flex items-center">
                            <Image src="/img/logo.svg" width={200} height={70} priority alt="Logo Bienes Raices" />
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
                    className={`absolute top-full left-0 px-1 pb-1 w-full z-50 lg:w-auto ${
                        isMenuOpen ? 'block' : 'hidden'
                    } transition-all duration-500 ease-in-out bg-header2 lg:flex lg:items-center lg:space-x-8  lg:relative lg:bg-transparent`}
                    id="navbar-default"
                    >
                        <ul className="flex flex-col gap-3 lg:gap-0 my-4 lg:flex-row lg:space-x-2 lg:border-0">
                            <li>
                                <Link legacyBehavior href="/">
                                    <a
                                        className={`mt-4 py-1 md:py-2.5 px-3 ml-5 md:mt-0 md:px-0 border-b-4 border-transparent text-white hover:border-navegacion transition-all duration-300 ${
                                        router.pathname === '/' && ' border-b-navegacion'
                                        }`}
                                    >
                                        Inicio
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link legacyBehavior href="/ventas">
                                    <a
                                        className={`mt-4 py-1 md:py-2.5 px-3 ml-5 md:mt-0 md:px-0 border-b-4 border-transparent text-white hover:border-navegacion transition-all duration-300  ${
                                        router.pathname === '/ventas' && 'border-b-navegacion'
                                        }`}
                                    >
                                        Ventas
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link legacyBehavior href="/rentas">
                                    <a
                                        className={`mt-4 py-1 md:py-2.5 px-3 ml-5 md:mt-0 md:px-0 border-b-4 border-transparent text-white hover:border-navegacion hover:border-b-4 transition-all duration-300 ${
                                        router.pathname === '/rentas' && 'border-b-navegacion'
                                        }`}
                                    >
                                        Rentas
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link legacyBehavior href="/about">
                                    <a
                                        className={`mt-4 py-1 md:py-2.5 px-3 ml-5 md:mt-0 md:px-0 border-b-4 border-transparent text-white hover:border-navegacion hover:border-b-4 transition-all duration-300 ${
                                        router.pathname === '/about' && 'border-b-navegacion'
                                        }`}
                                    >
                                        Nosotros
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link legacyBehavior href="/tuventa">
                                    <a
                                        className={`mt-4 py-1 md:py-2.5 px-3 ml-5 md:mt-0 md:px-0 border-b-4 border-transparent text-white hover:border-navegacion transition-all duration-300 ${
                                        router.pathname === '/tuventa' && 'border-b-navegacion'
                                        }`}
                                    >
                                        Vende tu propiedad
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link legacyBehavior href="/contacto">
                                    <a
                                        className={`mt-4 py-1 md:py-2.5 px-3 ml-5 md:mt-0 md:px-0 border-b-4 border-transparent text-white hover:border-navegacion transition-all duration-300 ${
                                        router.pathname === '/contacto' && 'border-b-navegacion'
                                        }`}
                                    >
                                        Contacto
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    )
}