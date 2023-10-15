import { useState } from 'react';

export default function Carousel({ images }) {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  console.log(images);

  return (
        <div className="relative w-full ">
            <div className="relative overflow-hidden h-[35rem]">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={`/img/${image}.webp`}
                        alt={`imagen ${index}`}
                        className={`w-full h-full rounded-3xl object-cover object-center transition-opacity duration-300 ${
                        index === currentImage ? '' : 'hidden'
                        }`}
                    />
                ))}
            </div>
            <div className=" flex justify-center items-center p-2 pt-5">
                <button onClick={prevImage} className="bg-black bg-opacity-60 text-white py-2 px-5 rounded-3xl focus:outline-none">
                Anterior</button>
                {images.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => setCurrentImage(index)}
                        className={`w-4 h-4 mx-2 rounded-full cursor-pointer ${
                        index === currentImage ? 'bg-navegacion' : 'bg-textgris'
                        }`}
                    ></div>
                ))}
                <button onClick={nextImage} className="bg-black bg-opacity-60 text-white py-2 px-5 rounded-3xl focus:outline-none">
                Siguiente</button>
            </div>
        </div>
  );
}
