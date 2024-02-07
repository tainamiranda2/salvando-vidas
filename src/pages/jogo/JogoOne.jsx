import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import gitMassagem from '../../img/gitMassagem.gif';

export const JogoOne = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  const [gifPlaying, setGifPlaying] = useState(false);
  const [parada, setParada] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const atendimentos = [
    "Vai andando até a vítima, se paramenta com luvas e máscara",
    "Personagem Vitória ficará de joelhos ao lado da vítima",
    "Personagem Vitória colocará suas duas mãos nos ombros da vítima",
    "Personagem Vitória checará responsividade falando “Senhor, senhor, você me escuta?”"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeElapsed(prevTime => prevTime + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (count === 10) {
      setGifPlaying(false);
      navigate('/');
    }
  }, [count, navigate]);
  

  const handleButtonClick = () => {
    if (!gifPlaying) {
      setGifPlaying(true);
    }
    setCount(prevCount => prevCount + 1);
  };

  const handleNextStep = () => {
    if (currentStep < atendimentos.length - 1) {
      setCurrentStep(prevStep => prevStep + 1);
    }else{
        setParada(true)
    }
  };

  return (
    <>
      {parada === false ? (
        <div>
          <h1>Personagem Vitória: O Jogador de Atendimento</h1>
          <h2>Passo {currentStep + 1}</h2>
          <p>{atendimentos[currentStep]}</p>
          <button onClick={handleNextStep}>Próximo Passo</button>
        </div>
      ) : (
        <div>
          <p>Voce pegou estes equipamento, é hora de realizar ação colocando em ordem alguns passos.</p>
          <p>Pegue </p>
          <img src={gitMassagem} className="git-massagem" alt="Descrição da Imagemm" />
          <button onClick={handleButtonClick}>Apertar</button>
          <p>Clques: {count}</p>
          <p>Tempo decorrido: {timeElapsed} segundos</p>
        </div>
      )}
    </>
  );
};
