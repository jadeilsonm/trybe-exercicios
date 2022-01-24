import React from "react";


class Content extends React.Component {
  render(){
    const conteudos = [
      {
        conteudo: 'High Order Functions',
        bloco: 8,
        status: 'Aprendido'
      },
      {
        conteudo: 'Composicao de Componentes',
        bloco: 11,
        status: 'Aprendendo',
      },
      {
        conteudo: 'Composicao de Estados',
        bloco: 12,
        status: 'Aprenderei'
      },
      {
        conteudo: 'Redux',
        bloco: 16,
        status: 'Aprenderei'
      },
    ];
    
  const blocos = ({ conteudo, bloco, status }) => {
        return  <p>O conteúdo é: `{conteudo}`<br></br>
        Status: `{bloco}`<br></br>
        Bloco: `{status}`</p> 
  }
    return(
      
        conteudos.map((el) => blocos(el))
      
      )
  }
}

export default Content