import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  state = {
    usuario:[
      {
        nome:"",
        comentario:""
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

  aoEnviarMensagem = () => {
    const novoComentario  = {
      nome: this.state.valorInputNome,
      comentario: this.state.valorInputComentario
    }
  }



  adicionarComentario =(mensagem)=>{
    this.setState({comentario:[...this.state.comentario,mensagem]})
  }

  render() {
   const listaDeComentarios= this.state.usuario.map((pessoa)=>{
    return(
      <div>
       
        nome={pessoa.nome}
        comentario={pessoa.comentario}
       
      </div>
    );
   })
   
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
        <button onclick={this.adicionarComentario}>Enviar</button>

     </div>
   )
    
  }
}

export default App;
