import  { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import img2 from '../../img/img2.png';
import img3 from '../../img/img3.png';
import paramedica from '../../img/paramedica.png';

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
import rcp from '../../img/rcp.png';
import certoErrado from '../../img/certo-errado.png';

export const FaseOne = () => {
  const navigate = useNavigate();
  const [selectedImages, setSelectedImages] = useState([]);
  const [images, setImages] = useState([]);
  const [showResults, setShowResults] = useState(false);
  //jogador escolheu luva e mascara
  const JogoOne = ['/src/img/luva.png', '/src/img/marcara.png'];
  //jogador escolheu LUVA, MÁSCARA, BOLSA VALVULA MÁSCARA
  const jogoTwo=['/src/img/luva.png', '/src/img/marcara.png', '/src/img/bolsa.png']
//jogador ESCOLHEU LUVA, MÁSCARA, BOLSA VALVULA MÁSCARA E DEA
const jogoThree=['/src/img/luva.png', '/src/img/marcara.png', '/src/img/bolsa.png', '/src/img/DEA.png']
  useEffect(() => {
    const shuffledImages = shuffleArray([
      bolsa, casaco, escova, luva, maca, DEA,
      marcara, lapiz, carteira, soro, poket, caderno
    ]);
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
    if (selectedImages.every(image => JogoOne.includes(image))) {
      setShowResults(true);
      navigate('/JogoOne');
    } else if (selectedImages.every(image => jogoTwo.includes(image))) {
      setShowResults(true);
      navigate('/JogoTwo');
    } else if (selectedImages.every(image => jogoThree.includes(image))) {
      setShowResults(true);
      navigate('/JogoThree');
    } else {
      setShowResults(true);
      setSelectedImages([]);
    }
  };
  
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
      <div className="image-container">
        <img src={img2} alt="Descrição da Imagem" className="card-imagem-fase" />
        <img src={rcp} className="rcp" alt="Descrição da Imagem" />
      </div>
      <div className='fase-one-balao'>   
        <p className="balao" style={{width: "150px", height: '50px', padding: '30px'}}>Tenho algumas coisas disponíveis na mochila para nossa segurança.</p>
        <div className="container-fase">
          <img className='certo-fase' src={certoErrado}/>
          <div className="images-container">
          {images.map((image, index) => (
  <img
    key={index}
    src={image}
    alt={`Imagem ${index + 1}`}
    className={`image-item ${showResults && JogoOne.includes(image) ? 'correct' : ''} ${selectedImages.includes(image) && !JogoOne.includes(image) ? 'incorrect' : ''} ${showResults && selectedImages.includes(image) && JogoOne.includes(image) ? 'selected-correct' : ''}`}
    onClick={() => handleImageClick(image)}
  />
))}

          </div>
        </div>
      </div>
      <button className="button-next" onClick={handleNextClick}>
        Next
      </button>
      <img src={img3} className='footer' alt="Descrição da Imagem" />
    </div>
  );
};
