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
                    <h2 className="flex items-center gap-2 font-medium text-white pl-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                        123 456 789</h2>
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