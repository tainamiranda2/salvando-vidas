//import img1 from '../../img/img1.png';
//import img3 from '../../img/img3.png';
//import rcp from '../../img/rcp.png';
//import perfil from '../../img/perfil.png';
import logo1 from '../../img/logo1.jpg';
import logo2 from '../../img/logo2.jpg';
import logo3 from '../../img/logo3.jpg';
import logo4 from '../../img/logo4.jpg';
import { useNavigate } from 'react-router-dom';
import { RiArrowGoBackLine } from "react-icons/ri";
import { useState } from 'react';

import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../services/Firebase';

export const Cadastro = () => {
  const history = useNavigate();

  const [formData, setFormData] = useState({
    nome: '',
    idade: '',
  sexo:'',
    regiao: ''
  });

  // Função para lidar com a submissão do formulário
  const enviarDadosParaFirestore = async (dadosDoFormulario) => {
    try {
      // Adiciona um novo documento à coleção "usuarios" com os dados do formulário
      const docRef = await addDoc(collection(db, "usuarios"), dadosDoFormulario);
      console.log("Documento adicionado com ID: ", docRef.id);
    } catch (error) {
      console.error("Erro ao adicionar documento: ", error);
    }
  };
  
  // Exemplo de uso da função para enviar dados
  const handleSubmit = (event) => {
    event.preventDefault();
    enviarDadosParaFirestore(formData);
    history("orientacoes");
    // Envia os dados do formulário para o Firestore
  };
  const handleChange = (event) => {

    const { name, regiao, idade, sexo,value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
      [idade]: value,
      [regiao]: value,
      [sexo]: value,

    });

   
   
    
  
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
        <span>Salvando vidas</span>
        <form onSubmit={handleSubmit}>
              <div className="input-group">
                <label htmlFor="nome">Seu nome:</label>
                <input id="nome" name="nome" value={formData.nome} onChange={handleChange} placeholder="Digite seu nome" type="text" />
              </div>

              <div className="input-group">
                <label htmlFor="idade">Idade:</label>
                <input id="idade" name="idade" value={formData.idade} onChange={handleChange} placeholder="Digite sua idade" type="text" />
              </div>

             
              <div className="input-group">
                <label htmlFor="regiao">Região:</label>
                <select id="regiao" name="regiao" value={formData.regiao} onChange={handleChange}>
                  <option>Nordeste</option>
                  <option>Centro-oeste</option>
                  <option>Norte</option>
                  <option>Suldeste</option>
                  <option>Sul</option>
                </select>
              </div>
              <div className="input-group">
                <label htmlFor="sexo">Sexo:</label>
                <select id="sexo" name="sexo" value={formData.sexo} onChange={handleChange}>
                  <option>Feminino</option>
                  <option>Masculino</option>
                  <option>Prefico não responder</option>
                </select>
              </div>

              <button className="button-start" type="submit">
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
