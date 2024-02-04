import  { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import bolsa from '../../img/bolsa.png';
import casaco from '../../img/casaco.png';
import escova from '../../img/escova.png';
import lapiz from '../../img/lapiz.png';
import luva from '../../img/luva.png';

import DEA from '../../img/DEA.png';
import maca from '../../img/maca.png';
import soro from '../../img/soro.png';
import marcara from '../../img/marcara.png';

import './Jogo.css' // Importe o arquivo de estilos CSS

export const FaseOne = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const [images, setImages] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const correctAnswers = ['luva', 'escova'];
  useEffect(() => {
    // Embaralhar as imagens antes de renderizar o componente
    const shuffledImages = shuffleArray([
      bolsa, casaco, escova, luva, soro, maca, DEA, marcara, lapiz
    ]);
    setImages(shuffledImages);
  }, []);

  const handleImageClick = (image) => {
    if (!showResults) {
      setSelectedImage(image);
    }
  };

  const handleNextClick = () => {
    // Verifique as respostas e navegue para a próxima página
    //const correctAnswers = ['luva', 'escova']; // Adicione as respostas corretas
    const isCorrect = correctAnswers.includes(selectedImage);
    const correctAnswers = ['luva', 'escova'];
    if (isCorrect) {
      setShowResults(true);
      // Adicione lógica de navegação para a próxima página
      navigate('/JogoOne');
    } else {
      setShowResults(true);
      // Adicione lógica para lidar com resposta incorreta, se necessário
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
      <h1>Salvados vidas</h1>
      <h2>Fase 1</h2>
      <div className="container">
        <p className="balao">Tenho algumas coisas disponíveis na mochila para nossa segurança.</p>
        <div className="images-container">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Imagem ${index + 1}`}
              className={`image-item ${showResults && selectedImage === image ? (correctAnswers.includes(selectedImage) ? 'correct' : 'incorrect') : ''}`}
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
