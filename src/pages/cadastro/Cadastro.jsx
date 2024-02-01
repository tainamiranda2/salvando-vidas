import img1 from '../../img/img1.png';
import img3 from '../../img/img3.png';
import { useNavigate } from 'react-router-dom';

export const Cadastro = () => {
  const history = useNavigate();

  const handleButtonClick = () => {
    history("jogo");
  };

  return (
    <div className="card-principal">
      <div className="card-container">
        <img src={img1} alt="Descrição da Imagem" className="card-imagem" />
        <h1>C R P</h1>
        <p>Salvando vidas</p>

        <div className='card-segundario'>
          <form>
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
          <img src={img3} alt="Descrição da Imagem" />
        </div>
      </div>
    </div>
  );
};
