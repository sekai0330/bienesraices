

export default function Formulario() {

    return (
        <div className='p-5 border border-orange-500 shadow-2xl bg-black bg-opacity-50 rounded-3xl'>
            <form method="post" action="sendto.php">
                <div className="mb-6">
                    <label htmlFor="nombre" className="block mb-1 font-medium text-white">Nombre</label>
                    <input type="text"  id="nombre" name="Nombre" placeholder="Escribe tu nombre" className="border border-orange-700 rounded-lg  focus:ring-orange-400 focus:outline-none focus:ring-2  block w-full p-2.5 transition duration-300" required/>
                </div>
                <div className="mb-6">
                    <label htmlFor="correo" className="block mb-1 font-medium text-white">Correo Electronico</label>
                    <input type="email" id="correo" name="Correo" className="border border-orange-700 rounded-lg focus:ring-orange-400 focus:outline-none focus:ring-2  block w-full p-2.5 transition duration-300" placeholder="Escribe tu correo electronico" required/>
                </div>
                <div className="mb-6">
                    <label htmlFor="telefono" className="block mb-1 font-medium text-white">Numero de Telefono</label>
                    <input type="number"  id="telefono" name="Telefono" placeholder="Escribe tu Numero de Telefono" className="border  border-orange-700 rounded-lg focus:ring-orange-400 focus:outline-none focus:ring-2  block w-full p-2.5 transition duration-300" required/>
                </div>
                <div className="mb-6">
                    <label htmlFor="mensaje" className="block mb-1 font-medium text-white">Mensaje</label>
                    <textarea id="mensaje" name="Mensaje" rows="4" className="border  border-orange-700  rounded-lg focus:ring-orange-400 focus:outline-none focus:ring-2  block w-full p-2.5 transition duration-300" placeholder="Escribe tu Mensaje aqui" required></textarea>
                </div>
                <button type="submit" className="flex items-center justify-center gap-1 text-white py-2.5 px-8 mr-2 mb-1 font-medium bg-orange-600 rounded-full transition duration-300 hover:bg-orange-700">Enviar
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                    </svg>
                </button>
            </form>
        </div>
    )
}