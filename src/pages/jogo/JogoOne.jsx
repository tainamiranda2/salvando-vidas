

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
  const [showVitoria, setShowVitoria] = useState(true);
 // const [showHomem, setShowHomem] = useState(true);
  const [showCardio, setShowCardio] = useState(false);
  const [parada, setParada] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);
  
  const atendimentos = [
    "Vai andando até a vítima, se paramenta com luvas e máscara",
    "Personagem Vitória ficará de joelhos ao lado da vítima",
    "Personagem Vitória colocará suas duas mãos nos ombros da vítima"
  ];
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
      setShowVitoria(true);
     // setShowHomem(true);
      setShowCardio(false);
      setTimeElapsed(0)
    }
  }, [count, timeElapsed]);

  const handleButtonClick = () => {
    if (!showCardio) {
      setShowVitoria(false);
    //  setShowHomem(false);
      setShowCardio(true);
      setTimerRunning(true); // Iniciar o temporizador quando as compressões começarem
    }
    setCount(prevCount => prevCount + 1);
  };

  const handleNextStep = () => {
    if (currentStep < 2) {
      setCurrentStep(prevStep => prevStep + 1);
    } else {
      setParada(true);
    }
  };

  return (
    <>
      {parada === false ? (
        <div  className='img-jogo'>
          <h1> O Jogador escolheu luvas e mascara.</h1>

          <h2>Passo {currentStep + 1}</h2>
          <p>{atendimentos[currentStep]}</p>
          <button onClick={handleNextStep}>Próximo Passo</button>
          <img className='img-jogo-one' src={equipamentos[currentStep]}/>

        </div>
      ) : (
        <div className='compressao'>
          <p> Lembre-se que você já escolheu seus materiais para realizar o
atendimento. <strong>Iniciar RCP</strong> </p>
          <h2 className='compressao-time'>Tempo decorrido: {timeElapsed} segundos</h2>
          <button className='compressao-botton' onClick={handleButtonClick}>Fazer compressão</button>
          <h3 className='compressao-feitas'>Compressões: {count}</h3>

          {showVitoria && <img src={novaVitoria } className="cena-one" alt="Descrição da Imagem" />}
          {showCardio && <img src={cardio} className="cena-one-cardio" alt="Descrição da Imagem" />}

          
          
        </div>
      )}
    </>
  );
};
