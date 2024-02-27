// Importe os módulos necessários
import { useNavigate } from 'react-router-dom';
//import img1 from '../../img/img1.png';
//import img3 from '../../img/img3.png';
//import rcp from '../../img/rcp.png';
import logo1 from '../../img/logo1.jpg';
import logo2 from '../../img/logo2.jpg';
import logo3 from '../../img/logo3.jpg';
import logo4 from '../../img/logo4.jpg';

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
      history("folder");
    }
  }

  return (
    <div className="card-principal">
      <div className="card-container">
      {/* <img
          src={img1}    alt="Descrição da Imagem" className="card-imagem"
     />
     */} 
        <div className='card-segundario'>
          <h3>RCP</h3>
  <h2>Salvando vidas</h2>
          <button className='button-start' onClick={() => handleButtonClick("play")}>Start</button>

          <button className='home-button' onClick={() => handleButtonClick("orientacoes")}>Orientações</button>
          <button className='home-button' onClick={() => handleButtonClick("idealizadores")}>Idealizadores</button>
         <div    className='footer'
>
          <img
          src={logo3}
      
          alt="Descrição da Imagem"
          
        />
         <img
          src={logo4}
          alt="Descrição da Imagem"
          
        />
         <img
          src={logo2}
          
          alt="Descrição da Imagem"
          
        />
         <img
          src={logo1}
          alt="Descrição da Imagem"
          
        />

        </div>
        </div>
      </div>
    </div>
  );
};
