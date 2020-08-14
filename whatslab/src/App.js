import React from 'react';
import './App.css';
import styled from 'styled-components';

const ContainerComentario = styled.section`

`

export class App extends React.Component{
  state = {
    usuario:[
      {
        nome:[],
        comentario:[],
      }
    ],

    valorInputNome:"",
    valorInputComentario:""
  }

  onChangeNome = (event) => {
    this.setState({valorInputNome: event.target.value})
  }

  onChangeComentario = (event) => {
    this.setState({valorInputComentario: event.target.value})
  }

  aoEnviarMensagem = (event) => {
      this.setState({nome: event.target.value}, 
          {comentario: event.target.value})
    }
  

  adicionarComentario =(mensagem)=>{
    this.setState({comentario:[...this.state.comentario,mensagem.value]})
  }


  render() {
    const listaDeComentarios= this.state.usuario.map((pessoa)=>{
      return(
        <div>
          <input
            value={this.state.valorInputNome}
            onChange={this.onChangeInputNome}
            placeholder={"Nome"}
          />

          <input
            value={this.state.valorInputComentario}
            onChange={this.onChangeInputComentario}
            placeholder={"Mensagem"}
           />
          <button onClick={this.props.adicionarComentario}>Enviar</button>

        </div>
       );
      })
    return (
      <div>{listaDeComentarios}</div>
    )
    
  }
}

export default App;
