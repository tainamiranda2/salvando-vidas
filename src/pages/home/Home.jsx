// Importe os módulos necessários
import { useNavigate } from 'react-router-dom';
import img1 from '../../img/img1.png';
import img3 from '../../img/img3.png';
import rcp from '../../img/rcp.png';

// Componente Home
export const Home = () => {
  const history = useNavigate();

  // Função para manipular o clique nos botões
  const handleButtonClick = (rota) => {
    if (rota === "idealizadores") {
      history("idealizadores");
    } else if (rota === "play") {
      history("cadastro");
    } else {
      history("orientacoes");
    }
  }

  return (
    <div className="card-principal">
      <div className="card-container">
        <img
          src={img1}    alt="Descrição da Imagem" className="card-imagem"
     />
        <div className='card-segundario'>
          <img src={rcp}/>
          <button className='button-start' onClick={() => handleButtonClick("play")}>Start</button>

          <button className='home-button' onClick={() => handleButtonClick("orientacoes")}>Orientações</button>
          <button className='home-button' onClick={() => handleButtonClick("idealizadores")}>Idealizadores</button>
          <img
          src={img3}
          className='footer'
          alt="Descrição da Imagem"
          
        />
        </div>
      </div>
    </div>
  );
};
