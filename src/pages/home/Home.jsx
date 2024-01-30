//import React from 'react';
import {useNavigate} from 'react-router-dom';

export const Home =() =>{ 
    const history=useNavigate();

    const handleButtonClick=(rota)=>{
        if(rota==="idealizadores"){
         //   console.log("Rota idealizadores")
         history("idealizadores");
        }else if(rota==="play"){
        //    console.log("play");
        history("jogo");
        }else{
          //  console.log("orientacoes");
          history("orientacoes");
        }
    }

    return(
<>
<h2>R C P</h2>
<p>Salvando vidas</p>
     <button onClick={() => handleButtonClick("orientacoes")}>Orientações</button>
     <button onClick={() => handleButtonClick("idealizadores")}>Idealizadores</button>

     <button className='button-start' onClick={() => handleButtonClick("play")}>Start</button>

</>
    )
}

