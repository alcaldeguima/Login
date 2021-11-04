import React, { Component } from "react";
import "./App.css";
import FormularioCadastro from "./Components/FormularioCadastro/FormularioCadastro";
import {Container, Typography} from "@material-ui/core"
import 'fontsource-roboto';

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" align="center" component="h1">Formulário de cadastro</Typography>
        <FormularioCadastro 
          enviar={enviarForm}
          validarCpf={validarCpf}
        />
      </Container >
    );
  }
}

function enviarForm(props){
  console.log(props);
}

function validarCpf(cpf){
  if(cpf.length !== 11){
    return { valido: false, texto: "cpf invalido!" }
  }else{
    return  { valido: true, texto: "" } 
  }
}

export default App;
