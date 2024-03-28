

import { useState, useEffect } from 'react';
//import luva from '../../img/luva.png';
//import marcara from '../../img/marcara.png';
//import homem from '../../img/homem.png';
//import cardio from '../../img/cardio.png';

//import joelhos from '../../img/joelhos.png';
//import checar from '../../img/checar.png';
import novaVitoria from '../../img/novaVitoria.png';

import checar from '../../img/checarC.png';
import senhor from '../../img/senhor.png';
import massagem from '../../img/massagem.png';

export const JogoOne = () => {
  //const navigate = useNavigate();
  const [count, setCount] = useState(0);
 // const [showHomem, setShowHomem] = useState(true);
 // const [showCardio, setShowCardio] = useState(false);
  const [parada, setParada] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);
  
  /*const atendimentos = [
    "Vai andando até a vítima, se paramenta com luvas e máscara",
    "Personagem Vitória ficará de joelhos ao lado da vítima",
    "Personagem Vitória colocará suas duas mãos nos ombros da vítima"
  ]~;
  */
 const textos=["Continuar","Continuar","Ligar para o Samu" ]
  const equipamentos=[novaVitoria, senhor, checar];
  useEffect(() => {
    if (timerRunning) {
      const timer = setInterval(() => {
        setTimeElapsed(prevTime => prevTime + 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [timerRunning]);

  useEffect(() => {
    if (count >= 100 && count <= 120 && timeElapsed >= 60) {
      setTimerRunning(false);
      alert('Você Fez 100 a 120 compressões um minuto, PARABÉNS! VOCÊ SALVOU UMA PESSOA!');
    } else if (timeElapsed >= 60 && (count < 100 || count > 120)) {
      alert('Você não fez 100 a 120 compressões em menos de um minuto, QUE PENA VOCÊ NÃO FEZ NO TEMPO CERTO.');
      setCount(0);
      setTimerRunning(false);
      setParada(false); // Volte para a etapa inicial se necessário
      setTimeElapsed(0);
    }
}, [count, timeElapsed]);

  const handleButtonClick = () => {
 
     // setShowVitoria(false);
    //  setShowHomem(false);
   //   setShowCardio(true);
      setTimerRunning(true); // Iniciar o temporizador quando as compressões começarem
    
    setCount(prevCount => prevCount + 1);
  };

  const handlecontinuarStep = () => {
    if (currentStep < 2) {
      setCurrentStep(prevStep => prevStep + 1);
    } else {
      setParada(true);
    }
  };

  return (
    <>
      {parada === false ? (
       <div className='jogo-imagem'>
       <div className='img-jogo'>
       {currentStep === 2 ? (
        <>
        <div className='balao'>
        <p>SENHOR, SENHOR, VOCÊ ME ESCUTA?</p>
       
        </div>

         </>
      ) : null}

         <img className='img-jogo-one' src={equipamentos[currentStep]} alt="Imagem do jogo"/>
       </div>
       <div >

         <button className="button-continuar-jogo" onClick={handlecontinuarStep}>{textos[currentStep]}</button>

       </div>
     </div>
     
      ) : (
        <div className='compressao'>
          <p className='balao'> Lembre-se que você já escolheu seus materiais para realizar o
atendimento. </p>
          <p className='compressao-time'>Tempo decorrido: {timeElapsed} segundos</p>
          <p className='compressao-feitas'>Compressões: {count}</p>

           <img src={massagem} className="cena-one-cardio" onClick={handleButtonClick} alt="Descrição da Imagem" />

          
          
        </div>
      )}
    </>
  );
};
