
export default function ButtonWs() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
    return (
      <div>
        <a
          href="https://api.whatsapp.com/send?phone=TU_NUMERO_DE_TELEFONO"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-2 right-4 bg-wsboton text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition duration-300 hover:animate-jump"
        >
          <img className='w-6 h-6' src="/img/whatsapp.svg" alt="Botton de whatsapp"/>
        </a>
        <a
        href="#"
        onClick={handleScrollToTop}
        className="fixed bottom-16 right-5 bg-grisclaro text-black p-2 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 hover:animate-jump"
      >
        <i className="fas fa-arrow-up">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18" />
            </svg>

        </i>
      </a>
      </div>
      );
}