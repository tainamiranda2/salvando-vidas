
import {  Link } from 'react-router-dom';
export const Idealizadores= () => {
    return(
        <>
        <div className='idealizadores'>

       <div className='idealizadores-curriculo'>
        <h2>Tainá Miranda</h2>
        <span>Estudante de sistemas de informação</span>
        <p>Desenvolvedora</p>
        <a href='/curriculos/fullstack.pdf' download>
            <button>Baixar currículo</button>
          </a>

        </div>

   
       <div className='idealizadores-curriculo'>
        <h2>Saulo Roberto</h2>
        <span>Estudante de sistemas de informação</span>
        <p>Designer</p>
        <button>Baixar curriculo</button>
        </div>
    
        <div className='idealizadores-curriculo'>
        <h2>Gleyson</h2>
        <span>Estudante colaborador</span>
        <button>Baixar curriculo</button>

        </div>
    
        <div className='idealizadores-curriculo'>
        <h2>Helena</h2>
        <span>Estudante colaboradora</span>
        <button>Baixar curriculo</button>

        </div>
    
        <div className='idealizadores-curriculo'>
        <h2>Ana Flavia</h2>
        <span>Professora orientadora</span>
        <button>Baixar curriculo</button>

        </div>

        <div className='idealizadores-curriculo'>
        <h2>Edson Camilo</h2>
        <span>Professor Orientador</span>
        <button>Baixar curriculo</button>

        </div>

        </div>
        <Link to="/">Voltar</Link>
        </>
    )
}
