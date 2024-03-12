//import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '../pages/home/Home'
import { QuizOne } from '../pages/jogo/QuizOne'
import { FaseOne } from '../pages/jogo/FaseOne'
import { JogoOne } from '../pages/jogo/JogoOne'

import { Cadastro } from '../pages/cadastro/Cadastro'
import { Idealizadores } from '../pages/idealizadores/Idealizadores'
import { Orientacoes } from '../pages/orientacoes/Orientacoes'
{/*import { JogoThree } from '../pages/jogo/JogoThree'
import { JogoTwo } from '../pages/jogo/JogoTwo'
 */}
import { Folder } from '../pages/orientacoes/Folder'
import { Graficos } from '../pages/graficos/Graficos'

const Router= () => {
    return (
        <BrowserRouter>
<Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/cadastro/QuizOne' element={<QuizOne/>}/>
    <Route path='/cadastro' element={<Cadastro/>}/>
    <Route path='/cadastro/orientacoes' element={<Orientacoes/>}/>
    <Route path='/orientacoes' element={<Orientacoes/>}/>

    <Route path='/folder' element={<Folder/>}/>
    <Route path='/QuizOne' element={<QuizOne/>}/>
    <Route path='/FaseOne' element={<FaseOne/>}/>
    <Route path='/JogoOne' element={<JogoOne/>}/>
   {/*  <Route path='/JogoTwo' element={<JogoTwo/>}/>
    <Route path='/JogoThree' element={<JogoThree/>}/>
    */}
    <Route path='/idealizadores' element={<Idealizadores/>}/>
    <Route path='/graficos' element={<Graficos/>}/>
</Routes>
        </BrowserRouter>
    )
}

export default Router;