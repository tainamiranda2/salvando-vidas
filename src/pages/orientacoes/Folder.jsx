
import bebe from '../../curriculos/cartilha.pdf';
import adulto from '../../curriculos/cartilha2.pdf';
import { CiSaveDown2 } from "react-icons/ci";
import { RiArrowGoBackLine } from "react-icons/ri";

export const Folder = () => {
  const handleGoBack = () => {
    window.history.back(); // Volta para a página anterior no histórico do navegador
  };
    return (
      <>
         <button onClick={handleGoBack}><RiArrowGoBackLine /></button>
      <div className='cartilhas'>
       
        <h3>Baixar folder com orientações.</h3>
        <p>Baixar cartilha para reanimação cardiopulmonar no bebê</p>

        <a href={bebe} download="bebe">
          <button><CiSaveDown2 /></button>
        </a>
        <p>Baixar cartilha para reanimação cardiopulmonar no adulto</p>
        <a href={adulto} download="adulto">
          <button><CiSaveDown2 /></button>
        </a>
      </div>
      </>
    );
  };
  