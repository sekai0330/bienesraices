import Layout from "../layout/Layout"
import Formulario from "../components/Formulario"

export default function Tuventa() {
    return (
        <Layout
            title={'Vende tu propiedad'}
            description={'Vende tu propiedad con nosotros'}
        >
            <div className="md:w-5/6 lg:w-5/6 mx-auto max-w-screen-xl py-16 px-3 lg:px-0">
                <h2 className="uppercase text-3xl font-medium text-center md:text-left">¿Quieres Vender tu Propiedad? | Bienes Raices</h2>

                <div className="flex flex-col lg:flex-row gap-5 items-center pt-10 ">
                    <div className="lg:w-1/5 flex items-center justify-center">
                        <img 
                            src="/img/tuventa.webp"  
                            alt="imagen sobre Nosotros"
                            className="block h-72 w-auto object-cover object-center rounded-t-lg"
                        />
                    </div>
                    <div className="lg:w-4/5 space-y-4 text-lg">
                        <h3 className="text-3xl font-bold">Confía en Nosotros para Obtener los Mejores Resultados</h3>
                        <p className="">En [Tu Nombre o el Nombre de tu Agencia], estamos dedicados a ayudarte a maximizar el valor de tu propiedad y simplificar el proceso de venta. Nuestra experiencia en el mercado inmobiliario y nuestro compromiso con la excelencia nos convierten en tu mejor socio para vender con éxito tu propiedad.</p>
                    </div>
                </div>

                <div className="space-y-4 text-lg mt-10">
                    <h3 className="text-3xl font-bold">Contacta con Nosotros</h3>
                    <p>Si estás listo para vender tu propiedad de manera eficiente y rentable, no dudes en ponerte en contacto con nosotros hoy mismo. Estamos aquí para responder a tus preguntas, brindarte orientación y ayudarte a dar el siguiente paso en el proceso de venta.</p>
                    <p>Confía en [Tu Nombre o el Nombre de tu Agencia] para hacer realidad tus objetivos inmobiliarios. ¡Estamos listos para trabajar contigo!</p>
                </div>

                <div className="mt-10">
                    <Formulario />
                </div>
            </div>
        </Layout>
    )
}