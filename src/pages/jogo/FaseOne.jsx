import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import img2 from '../../img/img2.png';
import bolsa from '../../img/bolsa.png';
import casaco from '../../img/casaco.png';
import escova from '../../img/escova.png';
import lapiz from '../../img/lapiz.png';
import luva from '../../img/luva.png';
import DEA from '../../img/DEA.png';
import maca from '../../img/maca.png';
import soro from '../../img/soro.png';
import marcara from '../../img/marcara.png';
import carteira from '../../img/carteira.png';
import caderno from '../../img/caderno.png';
import poket from '../../img/poket.png';

//import './Jogo.css'

export const FaseOne = () => {
  const navigate = useNavigate();
  const [selectedImages, setSelectedImages] = useState([]);
  const [images, setImages] = useState([]);
  const [showResults, setShowResults] = useState(false);
 const [avisoCerto, setAvisoCerto]=useState("?");
  const correctAnswers = ['/src/img/luva.png', '/src/img/marcara.png'];
//const parte1=['/src/img/marcara.png'];
//const parte2=['/src/img/luva.png'];

  useEffect(() => {
    // Embaralhar as imagens antes de renderizar o componente
    const shuffledImages = shuffleArray([bolsa, casaco, escova, luva, maca, DEA, marcara, lapiz, carteira, soro, poket, caderno]);
    setImages(shuffledImages);
  }, []);

  const handleImageClick = (image) => {
    if (!showResults) {
      setSelectedImages((prevSelectedImages) => {
        if (prevSelectedImages.includes(image)) {
          return prevSelectedImages.filter((selectedImage) => selectedImage !== image);
        } else {
          return [...prevSelectedImages, image];
        }
      });
    }
  };

  const handleNextClick = () => {
    // Verifique as respostas e navegue para a próxima página
    const isCorrect = selectedImages.every((selectedImage) => correctAnswers.includes(selectedImage));
    
    if (isCorrect) {
      setShowResults(true);
      navigate('/JogoOne');
    } else {
      setShowResults(true);
   
      setAvisoCerto("Errado")
   setSelectedImages([])
    }
  };

  // Função para embaralhar um array
  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  return (
    
    <div className="fase-one-container">
    <h2>Fase 1</h2>
    <div className="image-container">
      <img src={img2} alt="Descrição da Imagem" className="card-imagem" />
      <div className="text-container">
        <h1>C R P</h1>
        <p>Salvando vidas</p>
        <p className="balao">Tenho algumas coisas disponíveis na mochila para nossa segurança.</p>
      </div>
    </div>
  
    <div className="container-fase">
      <p className='certo-fase'>{avisoCerto}</p>
      <div className="images-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Imagem ${index + 1}`}
            className={`image-item ${showResults && correctAnswers.includes(image) ? 'correct' : ''} ${selectedImages.includes(image) ? 'selected' : ''}`}
            onClick={() => handleImageClick(image)}
          />
        ))}
      </div>
    </div>
    
    <button className="button-next" onClick={handleNextClick}>
      Next
    </button>
  </div>
  
  );
};
