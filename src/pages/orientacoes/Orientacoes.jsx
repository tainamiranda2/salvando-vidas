import { useState } from 'react';
//import './Orientacoes.css'; // Importe o arquivo de estilos CSS

export const Orientacoes = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const baloes = [
    "Olá, meu nome é VITÓRIA",
    "Estou muito feliz, iniciei as minhas aulas de primeiros socorros! Você sabe o que são primeiros socorros?",
    "Primeiros Socorros são os cuidados iniciais que devem ser prestados rapidamente a uma pessoa, vítima de acidentes ou de mal súbito, cujo estado físico põe em perigo a sua vida, com o fim de manter as funções vitais e evitar o agravamento de suas condições, aplicando medidas e procedimentos até a chegada do socorro médico",
    "SOCORRO !!! Tem alguém caído, vamos ver o que está acontecendo !!!",
    "Vitóriaaa, o professor José acabou de cair no chão, por favor, ajude!",
    "Certo vamos socorrer o professor.",
  ];

  const handleNext = () => {
    if (currentStep < baloes.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <div className="orientacoes-container">
      <h1>Orientações</h1>
      <div className="balao-container">
        <p className="balao">{baloes[currentStep]}</p>
        <button className="button-next" onClick={handleNext}>
          NEXT
        </button>
      </div>
    </div>
  );
};
