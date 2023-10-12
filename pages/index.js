import Layout from "../layout/Layout"
import Link from "next/link"
import Destacadas from "../components/Destacadas"

export default function Home() {
  return (
    <Layout 
      title={'Inicio'}
      description={'Venta y Alquiler de Casas, Terrenos, Locales y mas'}
    >
      <div className="[background-image:linear-gradient(to_right,rgb(0_0_0/.8),rgb(0_0_0/.2)),url(/img/landing.jpg)] h-screen grid items-center md:bg-cover bg-center md:p-0 mb-20">
          <div className="max-w-screen-xl mx-auto md:w-5/6 lg:w-5/6 p-3">
            <div className="md:w-3/5 [text-wrap:balance] space-y-10 animate-fade-down">
              <h1 className="text-navegacion text-6xl font-extrabold ">Tenemos tu Nueva Propiedad</h1>
              <p className="text-white text-xl">Un equipo de expertos te guiará en todo el proceso, déjanos todo en nuestras manos.</p>
              <div className="flex gap-5 mt-10">
                  <Link legacyBehavior href='/ventas'>
                      <a 
                        className="bg-botones hover:bg-botoneshover transition-colors text-white mt-5 md:mt-0 py-3 px-10 uppercase font-bold rounded-md"
                      >
                          Ventas
                      </a>
                  </Link>
                  <Link legacyBehavior href='/rentas'>
                      <a 
                        className="bg-white hover:bg-botondisable mt-5 md:mt-0 py-3 px-10 uppercase font-bold rounded-md"
                      >
                          rentas
                      </a>
                  </Link>
              </div>
            </div>
          </div>
      </div>

      <Destacadas />

      <section className="grid grid-cols-1 lg:grid-cols-2 items-center bg-grisclaro mb-10">
        <div className="px-3 lg:w-3/5 mx-auto [text-wrap:balance]">
          <h3 className="text-4xl font-semibold mt-10">Tenemos la propiedad que necesitas.</h3>
          <p className="text-lg text-gray-700 font-medium mt-5 mb-10 lg:mb-0 lg:mt-10">Nosotros te brindamos un servicio personalizado y de calidad para ayudarte con tu búsqueda inmobiliaria. Si necesitas asistencia o tienes preguntas, siéntete libre de contactarnos.</p>
        </div>
        <div>
          <img 
            src="/img/section.jpg" 
            alt="imagen de contenido"
            className="block h-96 lg:h-screen w-full object-cover object-center"  
          />
        </div>
      </section>
    </Layout>
    
  )
}
