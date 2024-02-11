import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import homem from '../../img/homem.png';
import vitoria from '../../img/vitoria.png';
import cardio from '../../img/cardio.webp';
import joelho from '../../img/joelho.png';
import respiracao from '../../img/respiracao.png';




export const JogoOne = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  const [showVitoria, setShowVitoria] = useState(true);
  const [showHomem, setShowHomem] = useState(true);
  const [showCardio, setShowCardio] = useState(false);
  const [parada, setParada] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const atendimentos = [
    "Vai andando até a vítima, se paramenta com luvas e máscara",
    "Personagem Vitória ficará de joelhos ao lado da vítima",
    "Personagem Vitória colocará suas duas mãos nos ombros da vítima"
  ];
const equipamentos=['/src/img/luva.png', '/src/img/joelho.png', '/src/img/respiracao.png'];


  useEffect(() => {
    const timer = setInterval(() => {
      setTimeElapsed(prevTime => prevTime + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (count === 10) {
      setShowVitoria(true);
      setShowHomem(true);
      setShowCardio(false);
      setParada(false);
    }
  }, [count]);

  const handleButtonClick = () => {
    if (!showCardio) {
      setShowVitoria(false);
      setShowHomem(false);
      setShowCardio(true);
    }
    setCount(prevCount => prevCount + 1);
  };

  const handleNextStep = () => {
    if (currentStep < atendimentos.length - 1) {
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
          <p>Voce pegou estes equipamento, é hora de realizar ação colocando em ordem alguns passos.</p>
          <p>Pegue </p>
          {showVitoria && <img src={vitoria} className="cena-one" alt="Descrição da Imagem" />}
          {showHomem && <img src={homem} className="cena-one" alt="Descrição da Imagem" />}
          {showCardio && <img src={cardio} className="cena-one-cardio" alt="Descrição da Imagem" />}

          <button onClick={handleButtonClick}>Apertar</button>
          {/* <p>Clques: {count}</p>
          <p>Tempo decorrido: {timeElapsed} segundos</p>
          */}
        </div>
      )}
    </>
  );
};
