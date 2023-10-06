import { useId } from "react"
import useFilters from "../hooks/useFilter"

export default function Filters() {

    const { filters, setFilters } = useFilters();

    const ubicacionFilterId = useId()
    const tipoFiltrerId = useId()

    const handleChangeUbicacion = (event) => {
        setFilters(prevState => ({
            ...prevState,
            ubicacion: event.target.value
        }))
    }

    const handleChangeTipo = (event) => {
        setFilters(prevState => ({
            ...prevState,
            tipo: event.target.value
        }))
    }

    return (
        <section className="flex flex-col lg:flex-row gap-4 mt-6 items-center lg:justify-between">
            {/* <div className="flex gap-2 border border-gray-200 bg-white p-2 rounded-lg shadow-lg">
                <label htmlFor={minPrecioFilterId} className="text-black font-medium">Precio a partir de:</label>
                <input
                    type="range"
                    id={minPrecioFilterId}
                    min="0"
                    max="500000"
                    onChange={handleChangeMinPrecio}
                    value={filters.minPrecio}
                />
                <span className="text-black font-medium">{filters.minPrecio}</span>
            </div> */}
            <div className="flex gap-2 border border-gray-200 bg-white p-2 rounded-lg shadow-lg">
                <label htmlFor={ubicacionFilterId} className="text-black font-medium">Ubicacion:</label>
                <select id={ubicacionFilterId} className="rounded px-1 text-center" onChange={handleChangeUbicacion}>
                    <option value="all">Todas</option>
                    <option value="Michoacan">Michoacan</option>
                    <option value="Guerrero">Guerrero</option>
                    <option value="Chiapas">Chiapas</option>
                    <option value="Yucatan">Yucatan</option>
                </select>
            </div>
            <div className="flex gap-2 border border-gray-200 bg-white p-2 rounded-lg shadow-lg">
                <label htmlFor={tipoFiltrerId} className="text-black font-medium">Tipo de Propiedad:</label>
                <select id={tipoFiltrerId} className="rounded px-1 text-center" onChange={handleChangeTipo}>
                    <option value="all">Todas</option>
                    <option value="Casa">Casa</option>
                    <option value="Terreno">Terreno</option>
                    <option value="Departamento">Departamento</option>
                    <option value="Local">Local</option>
                </select>
            </div>
        </section>
    )
}