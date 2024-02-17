
import { useState, useEffect } from 'react';

import vitoria from '../../img/vitoria.png';
import cardio from '../../img/cardio.webp';
import ventilacao from '../../img/ventilacao.png';
//import respiracao from '../../img/respiracao.png';

export const JogoTwo = () => {
  //const navigate = useNavigate();
  const [count, setCount] = useState(0);
  const [countVentilcao, setVentilcao] = useState(0);
  const [showVitoria, setShowVitoria] = useState(true);
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
  const equipamentos=['/src/img/novaVitoria.png', '/src/img/joelhos.png', '/src/img/checar.png'];

  useEffect(() => {
    if (timerRunning) {
      const timer = setInterval(() => {
        setTimeElapsed(prevTime => prevTime + 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [timerRunning]);

  useEffect(() => {
    if (count === 30 && countVentilcao === 2) {
      setTimerRunning(false);
      alert('PARABÉNS! VOCÊ SALVOU UMA PESSOA!')
    } else if (timeElapsed > 60) {
      alert('Deve iniciar novamente RCP, pois o jogador não consiguiu salvar a vítima.')

      // Reiniciar as compressões se o tempo decorrido for superior a 1 minuto
      setCount(0);
      setVentilcao(0);
      setTimerRunning(false);
      setParada(false); // Volte para a etapa inicial se necessário
      setShowVitoria(true);
      setShowCardio(false);
      setTimeElapsed(0)
    }
  }, [count, timeElapsed]);

  const handleButtonClick = () => {
    if (!showCardio) {
      setShowVitoria(false);
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

  const handleVentilacao=()=>{
    setVentilcao(prevCount => prevCount + 1);
  }

  return (
    <>
      {parada === false ? (
        <div>
          <h1>O Jogador escolheu luvas, mascara e bolsa valvula.</h1>

          <h2>Passo {currentStep + 1}</h2>
          <p>{atendimentos[currentStep]}</p>

          <img className='img-jogo-one' src={ equipamentos[currentStep]} />
          <button onClick={handleNextStep}>Próximo Passo</button>
        </div>
      ) : (
        <div>
          <p>Lembre-se que você já escolheu seus materiais para realizar o
atendimento. <strong>Iniciar RCP</strong> </p>
          <h2>Tempo decorrido: {timeElapsed} segundos</h2>
          <button onClick={handleButtonClick}>Compressão:</button>
          <button onClick={handleVentilacao}>Ventilção:</button>
          <h3>Compressões: {count}</h3>
          <h3>Ventilção: {countVentilcao}</h3>
          {showVitoria && <img src={vitoria} className="cena-one" alt="Descrição da Imagem" />}
          
          {showCardio && <img src={cardio} className="cena-one-cardio" alt="Descrição da Imagem" />}
          {showCardio && <img src={ventilacao} className="cena-one-cardio" alt="Descrição da Imagem" />}

          
        </div>
      )}
    </>
  );
};

