import React from 'react';
import styled from 'styled-components';

const ContainerApp = styled.section`
  display: grid;
  grid-template-columns: 200px 1fr 60px;
  grid-template-rows: 1fr 25px;
  grid-column-gap: 10px;
  padding: 10px;
  height: 95vh;
  width: 95vw;
  background-color: lightpink;
  border: thin solid black;
`
const ContainerNome = styled.span`
  grid-column: 1 / 2;
  grid-row: 2 /3;
` 
const ContainerComentario = styled.span`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
`
const BotaoEnviar = styled.button`
  grid-column: 3 / 4;
  grid-row: 2 / 3;
  width: 60px;
`
const BoxApp = styled.section`
  grid-column: 1 / 4;
  grid-row: 1 / 2;
  align-self: end;
  background-color: white;
  margin: 10px;
  border-radius: 5px;
  padding: 5px;
`
const BoxPessoa = styled.section`
  grid-column: 1 / 2;
  font-weight: bold;
`
const BoxComentario = styled.section`
  grid-column: 1 / 4;
  margin-bottom: 5px;
  border-bottom: 1px solid pink;
`
const Input = styled.input`
  width: 99%;
  height: 20px;
  border-radius: 5px;
  align-self: end;
`

class App extends React.Component{
  state = {
    usuario:[
      {
        nome:"",
        comentario:"",
      }
    ],

    valorInputNome:"",
    valorInputComentario:"",
  }

  adicionarComentario = () => {
    const novaPessoa = {
      nome: this.state.valorInputNome,
      comentario: this.state.valorInputComentario
    };
    const adicionarComentario = [...this.state.usuario,novaPessoa];
    this.setState({
      usuario: adicionarComentario,
      valorInputNome:"",
      valorInputComentario:"",
    });
  } 

  onChangeNome = (event) => {
    this.setState({valorInputNome: event.target.value})
  };

  onChangeComentario = (event) => {
    this.setState({valorInputComentario: event.target.value})
  };


  render() {
    const listaDeComentarios = this.state.usuario.map((pessoa) => {
      return(
        <div>
          <BoxPessoa>{pessoa.nome}</BoxPessoa>
          <BoxComentario>{pessoa.comentario}</BoxComentario>
        </div>
       );
      });
    return (
      <ContainerApp>
        <ContainerNome>
          <Input
            value = {this.state.valorInputNome}
            onChange = {this.onChangeNome}
            placeholder = {"Nome"}
          />
        </ContainerNome>
        <ContainerComentario>
          <Input
            value = {this.state.valorInputComentario}
            onChange = {this.onChangeComentario}
            placeholder = {"Mensagem"}
          />
        </ContainerComentario>
        <BotaoEnviar onClick  = {this.adicionarComentario}>Enviar</BotaoEnviar>
    <BoxApp>{listaDeComentarios}</BoxApp>
    </ContainerApp>
    );
    
  }
}

export default App;
