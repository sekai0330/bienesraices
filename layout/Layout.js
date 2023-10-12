import Head from "next/head";
import Header from "../components/Header";
import Redes from "../components/Redes";
import Footer from "../components/Footer";
import ButtonWs from "../components/ButtonWs";

export default function Layout({children, title = '', description = '' }) {

    return (
        <>
            <Head>
                <title>Bienes Raices - {title}</title>
                <meta name="description" content={description} />
            </Head>

            <div className="bg-header1">
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
            <ButtonWs />
            <Footer />
        </>
    )
}