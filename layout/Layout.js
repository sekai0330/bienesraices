import Head from "next/head";
import Header from "../components/Header";
import Redes from "../components/Redes";

export default function Layout({children, pagina}) {

    return (
        <>
            <Head>
                <title>Bienes Raices - {pagina}</title>
                <meta name="descripcion" content="Bienes Raices" />
            </Head>

            <div className="bg-blue-800 ">
                <div className="max-w-screen-xl flex flex-col md:flex-row items-center justify-between mx-auto lg:w-5/6 p-3.5 md:pl-0">
                    <h2 className="font-medium text-white pl-2">Telefono/Whatsapp: 123 456 789</h2>
                    <Redes />
                </div>
                <div>
                    <Header />
                </div>
            </div>

            <main>
                {children}
            </main>
        </>
    )
}