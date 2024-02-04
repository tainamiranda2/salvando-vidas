
//import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import homem from '../../img/homem.jpg';
import vitoria from '../../img/vitoria.jpg';
import './Jogo.css'

export const QuizOne = () => {
 const navigate = useNavigate();

//  const [isSceneSafe, setIsSceneSafe] = useState(null);

  const handleEvaluateScene = (dado) => {
    if (dado === true) {
      // Leva para a página se o ambiente estiver seguro
      navigate('/FaseOne');
    } else{
      alert("Avalie novamente a cena!")
    }
  };

  return (
    <>
    <div className="img-container">
      <img src={vitoria} className="img3" alt="Descrição da Imagem" />
      <img src={homem} className="img3" alt="Descrição da Imagem" />
      </div>

      <h1>O ambiente está seguro?</h1>
      <button onClick={() => handleEvaluateScene(true)}>Sim</button>
      <button onClick={() => handleEvaluateScene(false)}>Não</button>
      </>
  );
};


