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
        <section className="flex flex-col lg:flex-row gap-4 mt-6 items-center lg:justify-start">
            <div className="flex items-center gap-2 border border-grisclaro bg-fondodetalles p-2 rounded-lg shadow-lg shadow-textgris">
                <label htmlFor={ubicacionFilterId} className="text-black uppercase">Ubicacion:</label>
                <select id={ubicacionFilterId} className="rounded px-1 border-navegacion border p-1 text-center" onChange={handleChangeUbicacion}>
                    <option value="all">Todas</option>
                    <option value="Michoacan">Michoacan</option>
                    <option value="Guerrero">Guerrero</option>
                    <option value="Chiapas">Chiapas</option>
                    <option value="Yucatan">Yucatan</option>
                </select>
            </div>
            <div className="flex items-center gap-2 border border-grisclaro bg-fondodetalles p-2 rounded-lg shadow-lg shadow-textgris">
                <label htmlFor={tipoFiltrerId} className="text-black uppercase">Tipo de Propiedad:</label>
                <select id={tipoFiltrerId} className="rounded px-1 border-navegacion border p-1 text-center" onChange={handleChangeTipo}>
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