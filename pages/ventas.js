import Layout from "../layout/Layout"
import Filters from "../components/Filters"
import ListadoVentas from "../components/ListadoVentas"
import useFilters from "../hooks/useFilter"

export default function Ventas() {

    const { filteredVentas } = useFilters();

    return (
        <Layout
            title={'Ventas'}
            description={'Compra de Casas, Terrenos, Locales y mas'}
        >
            <div className="[background-image:url(/img/header.jpg)] p-12 bg-cover bg-center">
                <div className="w-5/6 mx-auto max-w-screen-xl">
                    <h1 className="text-white text-5xl font-bold text-center">Venta de Propiedades | BIENES RAICES</h1>
                </div>
            </div>
            <div className="w-5/6 mx-auto max-w-screen-xl mb-10">
                <Filters />
            </div>

            <ListadoVentas ventas={filteredVentas}/>

        </Layout>
    )
}