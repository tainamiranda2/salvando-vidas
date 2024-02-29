import { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import novaVitoria from '../../img/novaVitoria.png';
import { RiArrowGoBackLine } from "react-icons/ri";

//import img3 from '../../img/img3.png';
import './Orientacoes.css'
import logo1 from '../../img/logo1.jpg';
import logo2 from '../../img/logo2.jpg';
import logo3 from '../../img/logo3.jpg';
import logo4 from '../../img/logo4.jpg';
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

  const handlecontinuar = () => {
    if (currentStep < baloes.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Se estiver na última frase, redirecionar para a nova página
      history('/QuizOne');
    }
  };

  const handleGoBack = () => {
    window.history.back(); // Volta para a página anterior no histórico do navegador
  };
  return (
    <>
             <button onClick={handleGoBack}><RiArrowGoBackLine /></button>

    <div className="orientacoes-container">

      <img src={novaVitoria} className='vitoria' alt="Descrição da Imagem" />

      <div className='orientacoes-home'>
      <div className="balao-container">
        <p className="balao">{baloes[currentStep]}</p>
        <button className="button-continuar" onClick={handlecontinuar}>
          Continuar
        </button>
       </div>

       <div    className='footer'
>
          <img
          src={logo3}
      
          alt="Descrição da Imagem"
          
        />
         <img
          src={logo4}
          alt="Descrição da Imagem"
          
        />
         <img
          src={logo2}
          
          alt="Descrição da Imagem"
          
        />
         <img
          src={logo1}
          alt="Descrição da Imagem"
          
        />

        </div>
  </div>
    </div>
    </>

  );
};
