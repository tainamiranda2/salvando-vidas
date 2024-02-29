


import { useState, useEffect } from 'react';

//import vitoria from '../../img/vitoria.png';
import cardio from '../../img/cardio.png';
import ventilacao from '../../img/ventilacao.png';
//import Dea from '../../img/DEA.png';

import joelhos from '../../img/joelhos.png';
import checar from '../../img/checar.png';
import novaVitoria from '../../img/novaVitoria.png';

export const JogoThree = () => {
  //const navigate = useNavigate();
  const [count, setCount] = useState(0);
  const [countVentilcao, setVentilcao] = useState(0);
  const [parada, setParada] = useState(false);
//  const [countDea, setDea] = useState(0);
  const [showVitoria, setShowVitoria] = useState(true);
  const [showCardio, setShowCardio] = useState(false);
  
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

  const handlecontinuarStep = () => {
    if (currentStep < 2) {
      setCurrentStep(prevStep => prevStep + 1);
    } else {
      setParada(true);
    }
  };

  const handleVentilacao=()=>{
    setVentilcao(prevCount => prevCount + 1);
  }

  
 /* const handleDea=()=>{
    setDea(prevCount => prevCount + 1);
  }
*/
  return (
    <>
      {parada === false ? (
        <div>
          <h1>O Jogador escolheu luvas, mascara e bolsa valvula e DEA.</h1>

          <h2>Passo {currentStep + 1}</h2>
          <p>{atendimentos[currentStep]}</p>
          <button onClick={handlecontinuarStep}>Próximo Passo</button>
          <img className='img-jogo-one' src={ equipamentos[currentStep]} />

        </div>
      ) : (
        <div>
            <p>Lembre-se que você já escolheu seus materiais para realizar o
atendimento. <strong>Iniciar RCP</strong> </p>
          <h3>Tempo decorrido: {timeElapsed} segundos</h3>
          <h2>Compressões: {count}</h2>
          <h2>Ventilção: {countVentilcao}</h2>
          {showVitoria && <img src={novaVitoria} className="cena-one" alt="Descrição da Imagem" />}
          
          {showCardio && <img src={cardio} className="cena-one-cardio" alt="Descrição da Imagem" />}
          {showCardio && <img src={ventilacao} className="cena-one-cardio" alt="Descrição da Imagem" />}
          <button onClick={handleButtonClick}>Compressão</button>
          <button onClick={handleVentilacao}>Ventilção</button>
        
          
        </div>
      )}
    </>
  );
};

