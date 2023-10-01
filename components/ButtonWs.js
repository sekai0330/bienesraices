export default function ButtonWs() {
    return (
        <a
          href="https://api.whatsapp.com/send?phone=TU_NUMERO_DE_TELEFONO"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-4 right-4 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition duration-300 hover:animate-jump"
        >
          <img className='w-6 h-6' src="/img/whatsapp.svg" alt="Botton de whatsapp"/>
        </a>
      );
}