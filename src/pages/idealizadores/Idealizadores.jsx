//import taina from '../../curriculo/fullstack.pdf';
//import enf from '../../curriculo/enf.docx';
import  { useEffect } from 'react';
import { IoArrowBack } from "react-icons/io5";

import { RiArrowGoBackLine } from "react-icons/ri";
//import {  Link } from 'react-router-dom';
export const Idealizadores= () => {
    useEffect(() => {
        const backButton = document.getElementById('backToTopBtn');
        window.addEventListener('scroll', () => {
          if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backButton.style.display = 'block';
          } else {
            backButton.style.display = 'none';
          }
        });
      }, []);
    
      const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };

     
        const handleGoBack = () => {
          window.history.back(); // Volta para a página anterior no histórico do navegador
        };
    

    return(
        <>
      <button onClick={handleGoBack}><RiArrowGoBackLine /></button>
  
       <h1>Curriculum - Primeiros Socorros nas Escolas</h1>
        <div className='idealizadores'>
            
            <div className='curriculo'>

<h4>PROFA DRA. ANNA CLÁUDIA FREIRE DE ARAÚJO PATRÍCIO</h4>
<p><strong>Atribuição no Projeto:</strong> Coordenadora do Projeto</p>
<p><strong>Currículo:</strong>Atualmente professora da Universidade Federal da Paraíba/UFPB, no Centro Profissional e Tecnológico CPT-ETS/UFPB. Doutora em Enfermagem pela Universidade Federal do Rio Grande do Norte. Linha de pesquisa: Enfermagem na vigilância à saúde. Mestra em Enfermagem pela Universidade Federal da Paraíba, área de concentração cuidado em Enfermagem e Saúde, linha de pesquisa: Enfermagem e Saúde no Cuidado ao Adulto e Idoso. Especialista em Saúde da Família. Membro Associado no Grupo de Pesquisa Laboratório de Pesquisas no Cuidado em Saúde e Enfermagem nas Situações Agudas e Crônicas de Saúde, LAPAC/UFRN/CNPQ. Experiência no Laboratório de Estudos do Treinamento Físico Aplicado ao Desempenho e a Saúde - LETFADS/UFPB. Docente da Universidade Federal de Uberlândia entre 2018 - 2022. Experiência de Ensino Superior nas disciplinas Semiologia e Semiotécnica I e II, Parasitologia, Exames Laboratoriais e Bioestatística. Experiência em Ensino Básico, Técnico e Tecnológico nas disciplinas Parasitologia e Microbiologia, Saúde do Adulto I, Saúde do Adulto II, Práticas Integradas, Saúde da Mulher e Primeiros Socorros. Pesquisa principalmente nos seguintes âmbitos: pessoas vivendo com HIV, pessoas em situação de rua, infectologia, saúde pública. Desde 2008 pesquisa/atua na área de infectologia, urgência e emergência. Possui cursos de urgência/emergência e primeiros socorros certificados pela American heart Association AHA.

</p>

</div>
<div className='curriculo'>
<h4>PROF DR VILSON LACERDA BRASILEIRO JÚNIOR</h4>
<p><strong>Atribuição no Projeto:</strong> Colaborador</p>
<p><strong>Currículo:</strong> Possui Doutorado em Patologia Oral pela Universidade Federal do Rio Grande do Norte (UFRN), Mestrado em Odontologia (Diagnóstico Bucal) pela Universidade Federal da Paraíba (UFPB), Aperfeiçoamento em Cirurgia Oral Menor pelo Centro Integrado de Tecnologia e Pesquisa (CINTEP) e Graduação em Odontologia pela UFPB. Foi Professor Adjunto do Curso de Odontologia do Centro Universitário de João Pessoa (UNIPÊ), Diretor da Clínica Escola de Odontologia Afonso Pereira (UNIPÊ) e Professor de Cursos Técnicos na área de Odontologia (CETO). Ingressou como Professor Efetivo no Instituto Federal de Educação, Ciência e Tecnologia da Paraíba (IFPB) no ano de 2014. Nessa instituição, ocupou o cargo de Diretor de Desenvolvimento do Ensino, Coordenador do Comitê de Ética em Pesquisa e Coordenador de Pesquisa do Campus Monteiro. Atualmente, é docente da Universidade Federal da Paraíba. Além disso, é Membro do Banco de Avaliadores do Sistema Nacional de Avaliação da Educação Superior do Ministério da Educação.
</p>
</div>

<div className='curriculo'>
<h4>PROF DR EDSON CAMILO </h4>
<p><strong>Atribuição no Projeto:</strong> Colaborador</p>
<p><strong>Currículo:</strong> Doutor em Engenharia Industrial pela UFBA, mestre em Engenharia de Produção pela Universidade Federal da Paraíba (2004), , Especialista em Banco de Dados (UFAL) e graduado em Física pela Universidade Federal de Alagoas (1992) . Professor do Instituto Federal de Alagoas desde 1996 , atuando principalmente nos seguintes temas: IOT, inteligência artificial, pesquisa operacional, desenvolvimento Web, ciência de dados e banco de dados.  Tem experiência como analista de sistemas em várias empresas por mais de 24 anos.</p>
</div>
       
            <div className='curriculo'>

<h4>GLEYSON DA SILVA XAVIER</h4>
<p><strong>Atribuição no Projeto:</strong> Bolsista</p>
<p><strong>Currículo:</strong>  Atendimento Pré-hopitalar pela ANDRAE, concluído a disciplina de Primeiros Socorros no Centro Profissional e Tecnológico Escola Técnica de Saúde da Universidade Federal da Paraíba (CPT-ETS-UFPB), cursando o Técnico de Enfermagem pelo Centro Profissional e Tecnológico Escola Técnica de Saúde da Universidade Federal da Paraíba (CPT-ETS-UFPB).
</p>
</div>

<div className='curriculo'>
<h4>HELENA VIRGÍNIA DOS SANTOS NASCIMENTO</h4>
<p><strong>Atribuição no Projeto:</strong> Bolsista</p>
<p><strong>Currículo:</strong> Atendimento Pré-hopitalar pela ANDRAE, concluído a disciplina de Primeiros Pocorros no Centro Profissional e Tecnológico Escola Técnica de Saúde da Universidade Federal da Paraíba (CPT-ETS-UFPB), cursando o Técnico de Enfermagem pelo Centro Profissional e Tecnológico Escola Técnica de Saúde da Universidade Federal da Paraíba (CPT-ETS-UFPB).
</p>
</div>

<div className='curriculo'>
<h4>ANA JULIA MARLENE DA SILVA</h4>
<p><strong>Atribuição no Projeto:</strong> Voluntária</p>
<p><strong>Curriculum:</strong> Atualmente discente do curso Técnico em Enfermagem no Centro Profissional e Tecnológico Escola Técnica de Saúde da Universidade Federal da Paraíba (CPT-ETS-UFPB), concluído a disciplina de Primeiros Socorros. Tem cursos profissionalizantes de Primeiro Socorros para profissionais da saúde pela IFNR, Suporte Básico e Avançado de Reanimação Cardiopulmonar, Realística em Suporte Básico de Vida pela Centro Profissional e Tecnológico Escola Técnica de Saúde da Universidade Federal da Paraíba (CPT-ETS-UFPB), participou como aluna no curso de Atendimento Pré-hospitalar ministrado pela ANDRAE. 

</p>
</div>
           
            <div className='curriculo'>
<h4>ANA GLÓRIA DE SOUZA SILVA</h4>
<p><strong>Atribuição no Projeto:</strong> Voluntária</p>
<p><strong>Currículo:</strong> Atualmente discente do curso Técnico em Enfermagem pelo Centro Profissional e Tecnológico Escola Técnica de Saúde da Universidade Federal da Paraíba (CPT-ETS-UFPB), concluído a disciplina de Primeiros Socorros. Participou como aluna do curso de capacitação, Atendimento pré-hospitalar fornecido pela ANDRAE com colaboração do Centro Profissional e Tecnológico Escola Técnica de Saúde da Universidade Federal da Paraíba (CPT-ETS-UFPB).

</p>
</div>

<div className='curriculo'>
<h4>LETÍCIA RODRIGUES DOS PASSOS MELLO</h4>
<p><strong>Atribuição no Projeto:</strong> Voluntária</p>
<p><strong>Currículo:</strong> Graduanda em Ciências Biológicas, modalidade licenciatura, discente do Curso Técnico em Enfermagem, ambos na Universidade Federal da Paraíba. Realizou estágio voluntário no Parque Zoobotânico Arruda Câmara por um período aproximado de 3 meses na área de Educação Ambiental, onde atuou num projeto direcionado para a visitação guiada para crianças entre 2 a 7 anos. Participou de um projeto de Extensão na área de Histopatologia e Necropsia. Atualmente está como tutora da disciplina de Anatomia Humana na UFPB - Campus 1.
</p>
</div>

<div className='curriculo'>
<h4>JESSICLEIDE DA SILVA SOARES DO NASCIMENTO</h4>
<p><strong>Atribuição no Projeto:</strong> Voluntária</p>
<p><strong>Currículo:</strong> Técnico de Enfermagem pela Universidade Federal da Paraíba CPT-ETS-UFPB . Instrumentadora Cirúrgica pelo Projeto de Extensão Instrumentação: um despertar CPT-ETS-UFPB. Curso em APH Extensionistas voluntária no projeto Imuniza UFPB. Monitora pelo projeto Vacinar para não voltar pela Fiocruz. Colaboradora da Extensão ‘SOS nas Escolas’.
</p>
</div>

<div className='curriculo'>
<h4>LEANDRO DE MOURA DA SILVA</h4>
<p><strong>Atribuição no Projeto:</strong> Voluntário</p>
<p><strong>Currículo:</strong>Técnico de enfermagem pela Universidade Federal da Paraíba CPT-ETS, Capacitações em Terapia Renal substitutiva: Hemodiálise pela CPT-ETS, Suporte Básico de Vida pela UFRN e pela CTE Saúde, Atendimento Pré-Hospitalar pela CTE Saúde, Feridas e Curativos pela UFRN.

</p>
</div>
            
         
            <div className='curriculo'>

<h4>TAINÁ MIRANDA FERREIRA</h4>
<p><strong>Atribuição no Projeto:</strong> Desenvolvedora e PW</p>
<p><strong>Currículo:</strong> Acadêmica  de sistemas de informação pelo Instituto Federal de Alagoas. Tem experiência adquirida de estágios na área  de desenvolvimento de software e recentemente  com atuação no cargo desenvolvedora de software jr na JCM Advogados Associados.

</p>
</div>

<div className='curriculo'>

<h4>SAULO ROBERTO</h4>
<p><strong>Atribuição no Projeto:</strong> Designer </p>
<p><strong>Currículo:</strong> Graduanda em sistemas de informação, Instituto Federal de Alagoas (IFAL)</p>
</div>

        </div>
        <button id="backToTopBtn" onClick={scrollToTop} title="Voltar ao topo"><IoArrowBack /></button>
     

        </>
    )
}
