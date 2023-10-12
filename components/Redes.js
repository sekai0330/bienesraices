import { redesData } from "../data/redesData"

export default function Redes() {
    return(
        <div className="flex gap-3 mt-4 md:mt-0">
            {redesData.map(red => (
                <div key={red.id} className='p-2 rounded-md hover:bg-botones transition duration-300'>
                    <a target="_blank" href={red.sitioWeb}>
                        <img className='w-4 h-4 ' src={`/img/${red.imagen}.svg`} alt={`imagen red social ${red.nombre}`} />
                    </a>
                </div>
            ))}
        </div>
    )
}