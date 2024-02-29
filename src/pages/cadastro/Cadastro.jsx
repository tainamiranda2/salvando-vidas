//import img1 from '../../img/img1.png';
//import img3 from '../../img/img3.png';
//import rcp from '../../img/rcp.png';
import perfil from '../../img/perfil.png';
import logo1 from '../../img/logo1.jpg';
import logo2 from '../../img/logo2.jpg';
import logo3 from '../../img/logo3.jpg';
import logo4 from '../../img/logo4.jpg';
import { useNavigate } from 'react-router-dom';
import { RiArrowGoBackLine } from "react-icons/ri";

export const Cadastro = () => {
  const history = useNavigate();

  const handleButtonClick = () => {
    history("orientacoes");
  };
  const handleGoBack = () => {
    window.history.back(); // Volta para a página anterior no histórico do navegador
  };


  return (
    <>
    
    <div className="card-principal">
    <button onClick={handleGoBack}><RiArrowGoBackLine /></button>

      <div className="card-container">
    {/**   <img src={img1} alt="Descrição da Imagem" className="card-imagem" />
       
*/}
        <div className='card-segundario'>
        <p>RCP</p>
        <span>Salvadno vidas</span>
          <form>
          <img className='perfil' src={perfil}/>
            <div className="input-group">
              <label htmlFor="nome">Seu nome:</label>
              <input id="nome" name="nome" placeholder="Digite seu nome" type="text" />
            </div>

            <div className="input-group">
              <label htmlFor="idade">Idade:</label>
              <input id="idade" name="idade" placeholder="Digite sua idade" type="text" />
            </div>

            <div className="input-group">
              <label htmlFor="pais">País:</label>
              <select id="pais" name="pais">
                <option>Brasil</option>
              </select>
            </div>

            <div className="input-group">
              <label htmlFor="regiao">Região:</label>
              <select id="regiao" name="regiao">
                <option>Nordeste</option>
              </select>
            </div>

            <button className="button-start" onClick={() => handleButtonClick("play")}>
              Salvar
            </button>
          </form>
      
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
    </>
  );
};
