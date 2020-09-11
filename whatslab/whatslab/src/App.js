import React from 'react';
import logo from './logo.svg';
import './App.css';

 class App extends React.Component { 
  
    state = {
      usuario:[
        {
          nome:"",
          comentario:""
        }
      ],
  
      valorInputNome:"",
      valorInputComentario:"",
    };

    adicionarComentario=()=>{
      const novaPessoa = {  
        nome: this.state.valorInputNome,
      comentario: this.state.valorInputComentario
      };

      const adicionarComentario =[...this.state.usuario,novaPessoa];
      this.setState({
        usuario:adicionarComentario,
        valorInputNome:"",
        valorInputComentario:"",
      });
    };

  
    
  
    onChangeNome = (event) => {
      this.setState({valorInputNome: event.target.value})
    };
  
    onChangeComentario = (event) => {
      this.setState({valorInputComentario: event.target.value})
    };
  
  
    render() {
     const listaDeComentarios= this.state.usuario.map((pessoa)=>{
      return(
        <div>
          {pessoa.nome} - {pessoa.comentario}
        </div>
      );
      });
     
     return(
       <div>
         <input
          value={this.state.valorInputNome}
          onChange={this.onChangeNome}
          placeholder={"Nome"}
          />
          
          <input
          value={this.state.valorInputComentario}
          onChange={this.onChangeComentario}
          placeholder={"Mensagem"}
          />
          <button onClick={this.adicionarComentario}>Enviar</button>
          <div>{listaDeComentarios}</div>
       </div>
       
     );
    } 
    }
  
  
  export default App;
  
  