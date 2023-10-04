import Layout from "../layout/Layout"
import Filters from "../components/Filters";
import ListadoRentas from "../components/ListadoRentas";
import useFilters from "../hooks/useFilter";

export default function Rentas() {

    const { filteredRentas } = useFilters()

    return (
        <Layout
            title={'Rentas'}
            description={'Renta de Casas, Terrenos, Locales y mas'}
        >
            <div className="[background-image:url(/img/header.jpg)] p-12 bg-cover bg-center">
                <div className="w-5/6 mx-auto max-w-screen-xl">
                    <h1 className="text-white text-5xl font-bold text-center">Renta de Propiedades | BIENES RAICES</h1>
                </div>
            </div>
            <div className="w-5/6 mx-auto max-w-screen-xl mb-10">
                <Filters />
            </div>
            
            <ListadoRentas rentas = {filteredRentas} />

        </Layout>
    )
}