import React, { useState } from "react";
import DadosUsuario from "../DadosUsuario";
import DadosEntrega from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";

function FormularioCadastro({ enviar, validarCpf }) {
  return (
    <>
      <DadosPessoais enviar={enviar} validarCpf={validarCpf} />
      <DadosUsuario />
      <DadosEntrega />
    </>
  );
}

export default FormularioCadastro;
