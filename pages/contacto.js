import Layout from "../layout/Layout"
import Formulario from "../components/Formulario"

export default function Contacto() {
    return (
        <Layout
            title={'Contacto'}
        >
            <div className="md:w-5/6 lg:w-5/6 mx-auto max-w-screen-xl py-20 px-3 lg:px-0">
                <h2 className="uppercase text-3xl font-medium text-center md:text-left">Contactanos | Bienes Raices</h2>

                <Formulario />
            </div>
        </Layout>
    )
}