import Layout from "../layout/Layout"
import Formulario from "../components/Formulario"

export default function Contacto() {
    return (
        <Layout
            title={'Contacto'}
        >
            <section className="[background-image:linear-gradient(to_right,rgb(0_0_0/.9),rgb(0_0_0/.2)),url(/img/bgform.webp)]  bg-cover bg-center">
                <div className="md:w-5/6 lg:w-5/6 mx-auto max-w-screen-xl px-3 lg:px-0 py-10">
                    <h2 className="uppercase text-3xl text-white font-medium text-center md:text-left mb-5">Contactanos | Bienes Raices</h2>

                    <div className=" lg:w-3/5">
                        <Formulario />
                    </div>

                </div>
            </section>
        </Layout>
    )
}