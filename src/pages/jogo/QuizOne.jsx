
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const QuizOne = () => {
  const navigate = useNavigate();
  const [isSceneSafe, setIsSceneSafe] = useState(null);

  const handleEvaluateScene = () => {
    if (isSceneSafe === true) {
      // Leva para a página se o ambiente estiver seguro
      navigate('/faseOne');
    } 
  };

  return (
    <div>
      <h1>O ambiente está seguro?</h1>
      <button onClick={() => setIsSceneSafe(true)}>Sim</button>
      <button onClick={() => setIsSceneSafe(false)}>Não</button>
      {isSceneSafe !== null && (
        <div>
          <p>A cena está {isSceneSafe ? 'segura' : 'não segura'}!</p>
          <button onClick={handleEvaluateScene}>Avaliar cena</button>
        </div>
      )}
    </div>
  );
};


