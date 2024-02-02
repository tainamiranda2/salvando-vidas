import  { useState } from 'react';
import bolsa from '../../img/bolsa.png';
import casaco from '../../img/casaco.png';
import escova from '../../img/escova.png';
import lapiz from '../../img/lapiz.png';
import luva from '../../img/luva.png';

export const faseTwo = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <>
      <h1>Salvados vidas</h1>
      <h2>Fase 2</h2>
      <div className="container">
        <p className="balao">O Professor José está caído. Quais as medidas que devem ser tomadas para os primeiros socorros?</p>
        <div className="images-container">
          <img
            src={bolsa}
            alt="Descrição da Imagem"
            className={selectedImage === bolsa ? 'selected' : ''}
            onClick={() => handleImageClick(bolsa)}
          />

          <img
            src={casaco}
            alt="Descrição da Imagem"
            className={selectedImage === casaco ? 'selected' : ''}
            onClick={() => handleImageClick(casaco)}
          />

          <img
            src={escova}
            alt="Descrição da Imagem"
            className={selectedImage === escova ? 'selected' : ''}
            onClick={() => handleImageClick(escova)}
          />

          <img
            src={luva}
            alt="Descrição da Imagem"
            className={selectedImage === luva ? 'selected' : ''}
            onClick={() => handleImageClick(luva)}
          />

          <img
            src={lapiz}
            alt="Descrição da Imagem"
            className={selectedImage === lapiz ? 'selected' : ''}
            onClick={() => handleImageClick(lapiz)}
          />
        </div>
      </div>
    </>
  );
};
