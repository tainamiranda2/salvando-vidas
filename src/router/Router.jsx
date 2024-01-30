//import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '../pages/home/Home'
import { Jogo } from '../pages/jogo/Jogo'
import { Cadastro } from '../pages/cadastro/Cadastro'
import { Idealizadores } from '../pages/idealizadores/Idealizadores'
import { Orientacoes } from '../pages/orientacoes/Orientacoes'

const Router= () => {
    return (
        <BrowserRouter>
<Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/jogo' element={<Jogo/>}/>
    <Route path='/cadastro' element={<Cadastro/>}/>
    <Route path='/orientações' element={<Orientacoes/>}/>

    <Route path='/idealizadores' element={<Idealizadores/>}/>

</Routes>
        </BrowserRouter>
    )
}

export default Router;