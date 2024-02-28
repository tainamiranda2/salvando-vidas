
import bebe from '../../curriculos/cartilha.pdf';
import adulto from '../../curriculos/cartilha2.pdf';



export const Folder = () => {
    return (
      <div className='cartilhas'>
        <h3>Baixar folder com orientações.</h3>
        <a href={bebe} download="bebe">
          <button>Baixar cartilha para massagem cardiopulmonar no bebê</button>
        </a>
        <a href={adulto} download="adulto">
          <button>Baixar cartilha para massagem cardiopulmonar no adulto</button>
        </a>
      </div>
    );
  };
  