//import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '../pages/home/Home'
import { QuizOne } from '../pages/jogo/QuizOne'
import { FaseOne } from '../pages/jogo/FaseOne'
import { JogoOne } from '../pages/jogo/JogoOne'

import { Cadastro } from '../pages/cadastro/Cadastro'
import { Idealizadores } from '../pages/idealizadores/Idealizadores'
import { Orientacoes } from '../pages/orientacoes/Orientacoes'

const Router= () => {
    return (
        <BrowserRouter>
<Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/cadastro/QuizOne' element={<QuizOne/>}/>
    <Route path='/cadastro' element={<Cadastro/>}/>
    <Route path='/orientacoes' element={<Orientacoes/>}/>
    <Route path='/QuizOne' element={<QuizOne/>}/>
    <Route path='/FaseOne' element={<FaseOne/>}/>
    <Route path='/JogoOne' element={<JogoOne/>}/>

    <Route path='/idealizadores' element={<Idealizadores/>}/>

</Routes>
        </BrowserRouter>
    )
}

export default Router;