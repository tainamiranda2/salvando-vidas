
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import homem from '../../img/homem.png';
//import vitoria from '../../img/vitoria.png';
import curiosos from '../../img/curiosos.png';
import novaVitoria from '../../img/novaVitoria.png';
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
      setAviso("Avalie novamente a cena.")
    }
  };

  return (
    <div className='quadrado-quiz'>
    
     
      <div className='quadrado-constainer'>
        <p className='questao'>{aviso}</p>
      <h1>O ambiente está seguro?</h1>
      <div className='button-quiz-one'>
      <button onClick={() => handleEvaluateScene(true)}>Sim</button>
      <button onClick={() => handleEvaluateScene(false)}>Não</button>
      </div>
      </div>
<div className="img-container">
        <img src={novaVitoria} className="cena-quiz" alt="Descrição da Imagem" />
   <img src={homem} className="cena-quiz" alt="Descrição da Imagem" />
   <img src={curiosos} className="cena-quiz" alt="Descrição da Imagem" />
      </div>
      </div>
  );
};


