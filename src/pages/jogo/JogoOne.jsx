

import { useState, useEffect } from 'react';
//import luva from '../../img/luva.png';
//import marcara from '../../img/marcara.png';
//import homem from '../../img/homem.png';
import cardio from '../../img/cardio.png';

import joelhos from '../../img/joelhos.png';
import checar from '../../img/checar.png';
import novaVitoria from '../../img/novaVitoria.png';

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
  const equipamentos=[novaVitoria, joelhos, checar];
  useEffect(() => {
    if (timerRunning) {
      const timer = setInterval(() => {
        setTimeElapsed(prevTime => prevTime + 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [timerRunning]);

  useEffect(() => {
    if (count >= 100 && count <= 200) {
      setTimerRunning(false);
      alert('PARABÉNS! VOCÊ SALVOU UMA PESSOA!')
    } else if (timeElapsed > 60) {
      alert('Deve iniciar novamente RCP, pois o jogador não consiguiu salvar a vítima.')
      // Reiniciar as compressões se o tempo decorrido for superior a 1 minuto
      setCount(0);
      setTimerRunning(false);
      setParada(false); // Volte para a etapa inicial se necessário
      //setShowVitoria(true);
     // setShowHomem(true);
    //  setShowCardio(false);
      setTimeElapsed(0)
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
          <h2 className='compressao-time'>Tempo decorrido: {timeElapsed} segundos</h2>
          <h3 className='compressao-feitas'>Compressões: {count}</h3>

           <img src={cardio} className="cena-one-cardio" onClick={handleButtonClick} alt="Descrição da Imagem" />

          
          
        </div>
      )}
    </>
  );
};
