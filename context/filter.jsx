import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import ventasData from "../mocks/ventas.json";
import rentasData from "../mocks/rentas.json";
import destacadasData from "../mocks/destacadas.json";

const FiltersContext = createContext();

const FilterProvider = ({ children }) => {

    const [ventas, setVentas ] = useState(ventasData);
    const [rentas, setRentas ] = useState(rentasData);
    const [destacadas, SetDestacadas ] = useState(destacadasData);
    const [ filters, setFilters ] = useState({
        tipo: "all",
        ubicacion: "all"
    });

    const router = useRouter()

    // Restablecer los filtros al cambiar de página
    useEffect(() => {
        setFilters({
        tipo: "all",
        ubicacion: "all"
        });
    }, [router.pathname]);

    const filterVentas = (ventas) => {
        return ventas.ventas.filter( ventas => {
            return (
                (
                filters.tipo === 'all' ||
                ventas.tipo === filters.tipo
                ) &&
                (
                    filters.ubicacion === 'all' || ventas.ubicacion === filters.ubicacion
                )
            )
        })
    }

    const filteredVentas = filterVentas(ventas)

    const filterRentas = (rentas) => {
        return rentas.rentas.filter( rentas => {
            return (
                (
                filters.tipo === 'all' ||
                rentas.tipo === filters.tipo
                ) &&
                (
                    filters.ubicacion === 'all' || rentas.ubicacion === filters.ubicacion
                )
            )
        })
    }

    const filteredRentas = filterRentas(rentas)

    return (
        <FiltersContext.Provider 
            value = {{
                ventas,
                setVentas,
                rentas,
                setRentas,
                destacadas,
                SetDestacadas,
                filters,
                setFilters,
                filteredVentas,
                filteredRentas
            }}
        >
            { children }
        </FiltersContext.Provider>
    )
}

export { FilterProvider }
export default FiltersContext