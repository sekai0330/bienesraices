import { createContext, useState } from "react";
import ventasData from "../mocks/ventas.json";
import rentasData from "../mocks/rentas.json";

const FiltersContext = createContext();

const FilterProvider = ({ children }) => {

    const [ventas, setVentas ] = useState(ventasData);
    const [rentas, setRentas ] = useState(rentasData);
    const [ filters, setFilters ] = useState({
        tipo: "all",
        minPrecio: 0
    });

    const filterVentas = (ventas) => {
        return ventas.ventas.filter( ventas => {
            return (
                ventas.precio >= filters.minPrecio &&
                (
                filters.tipo === 'all' ||
                ventas.tipo === filters.tipo
                )
            )
        })
    }

    const filteredVentas = filterVentas(ventas)


    const filterRentas = (rentas) => {
        return rentas.rentas.filter( rentas => {
            return (
                rentas.precio >= filters.minPrecio &&
                (
                filters.tipo === 'all' ||
                rentas.tipo === filters.tipo
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