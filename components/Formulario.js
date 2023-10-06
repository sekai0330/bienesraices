

export default function Formulario() {

    return (
        <div className='mx-3 md:mx-0 mt-10 lg:w-1/2'>
            <form >
                <div className="mb-6">
                    <label htmlFor="nombre" className="block mb-1 font-medium">Nombre</label>
                    <input type="text"  id="nombre" name="nombre" placeholder="Escribe tu nombre" className="  border border-slate-700 rounded-lg focus:ring-naranja focus:outline-none focus:ring-2  block w-full p-2.5 transition duration-300" required/>
                </div>
                <div className="mb-6">
                    <label htmlFor="email" className="block mb-1 font-medium">Correo Electronico</label>
                    <input type="email" id="email" name="email" className="  border border-slate-700 rounded-lg focus:ring-naranja focus:outline-none focus:ring-2  block w-full p-2.5 transition duration-300" placeholder="Escribe tu correo electronico" required/>
                </div>
                <div className="mb-6">
                    <label htmlFor="telefono" className="block mb-1 font-medium">Numero de Telefono</label>
                    <input type="number"  id="telefono" name="telefono" placeholder="Escribe tu Numero de Telefono" className="  border border-slate-700 rounded-lg focus:ring-naranja focus:outline-none focus:ring-2  block w-full p-2.5 transition duration-300" required/>
                </div>
                <div className="mb-6">
                    <label htmlFor="mensaje" className="block mb-1 font-medium">Mensaje</label>
                    <textarea id="mensaje" name="mensaje" rows="4" className=" border border-slate-700  rounded-lg focus:ring-naranja focus:outline-none focus:ring-2  block w-full p-2.5 transition duration-300" placeholder="Escribe tu Mensaje aqui" required></textarea>
                </div>
                <button type="submit" className="flex items-center justify-center gap-1 text-white py-2.5 px-8 mr-2 mb-1 font-medium border-2 border-orange-300  bg-orange-600 rounded-full border transition duration-300 hover:bg-orange-700">Enviar
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                    </svg>
                </button>
            </form>
        </div>
    )
}