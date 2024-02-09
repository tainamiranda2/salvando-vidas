
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import homem from '../../img/homem.png';
import vitoria from '../../img/vitoria.png';
//import './Jogo.css'

export const QuizOne = () => {
 const navigate = useNavigate();
 const [aviso, setAviso]=useState("?");
//  const [isSceneSafe, setIsSceneSafe] = useState(null);

  const handleEvaluateScene = (dado) => {
    if (dado === true) {
      // Leva para a página se o ambiente estiver seguro
      navigate('/FaseOne');
    } else{
      setAviso("X")
    }
  };

  return (
    <div className='quadrado-quiz'>
    <div className="img-container">
        <img src={vitoria} className="cena-one" alt="Descrição da Imagem" />
   <img src={homem} className="cena-one" alt="Descrição da Imagem" />
      </div>
     
      <div className='quadrado-constainer'>
        <p className='questao'>{aviso}</p>
      <h1>O ambiente está seguro?</h1>
      <div className='button-quiz-one'>
      <button onClick={() => handleEvaluateScene(true)}>Sim</button>
      <button onClick={() => handleEvaluateScene(false)}>Não</button>
      </div>
      </div>
      </div>
  );
};


