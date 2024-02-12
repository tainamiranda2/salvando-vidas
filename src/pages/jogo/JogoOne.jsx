

import { useState, useEffect } from 'react';

import homem from '../../img/homem.png';
import vitoria from '../../img/vitoria.png';
import cardio from '../../img/cardio.webp';
//import joelho from '../../img/joelho.png';
//import respiracao from '../../img/respiracao.png';

export const JogoOne = () => {
  //const navigate = useNavigate();
  const [count, setCount] = useState(0);
  const [showVitoria, setShowVitoria] = useState(true);
  const [showHomem, setShowHomem] = useState(true);
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
  const equipamentos=['/src/img/luva.png', '/src/img/joelho.png', '/src/img/respiracao.png'];
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
      // Reiniciar as compressões se o tempo decorrido for superior a 1 minuto
      setCount(0);
      setTimerRunning(false);
      setParada(false); // Volte para a etapa inicial se necessário
      setShowVitoria(true);
      setShowHomem(true);
      setShowCardio(false);
      setTimeElapsed(0)
    }
  }, [count, timeElapsed]);

  const handleButtonClick = () => {
    if (!showCardio) {
      setShowVitoria(false);
      setShowHomem(false);
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
        <div>
          <h1>Personagem Vitória: O Jogador de Atendimento</h1>

          <h2>Passo {currentStep + 1}</h2>
          <p>{atendimentos[currentStep]}</p>
          <img src={ equipamentos[currentStep]} />
          <button onClick={handleNextStep}>Próximo Passo</button>
        </div>
      ) : (
        <div>
          <p>Compressão.</p>
          <p>Tempo decorrido: {timeElapsed} segundos</p>

          {showVitoria && <img src={vitoria} className="cena-one" alt="Descrição da Imagem" />}
          {showHomem && <img src={homem} className="cena-one" alt="Descrição da Imagem" />}
          {showCardio && <img src={cardio} className="cena-one-cardio" alt="Descrição da Imagem" />}

          <button onClick={handleButtonClick}>Compressão</button>
          <p>Compressões: {count}</p>
          
        </div>
      )}
    </>
  );
};
