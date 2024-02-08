import { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import img2 from '../../img/img2.png';
import img3 from '../../img/img3.png';
import './Orientacoes.css'

export const Orientacoes = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const history = useNavigate();

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
    } else {
      // Se estiver na última frase, redirecionar para a nova página
      history('/QuizOne');
    }
  };

 /* const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };
  */
  return (
    <div className="orientacoes-container">
     
      <img src={img2} alt="Descrição da Imagem" className="card-imagem-logo" />
      <div className='orientacoes-home'>
      <div className="balao-container">
        <p className="balao">{baloes[currentStep]}</p>
        <button className="button-next" onClick={handleNext}>
          NEXT
        </button>
       </div>

    <img src={img3} className="footer" alt="Descrição da Imagem" />
  </div>
    </div>
  );
};
