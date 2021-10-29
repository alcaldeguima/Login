import React, { useState } from "react";
import { TextField, Button, Switch, FormControlLabel } from "@material-ui/core";

function FormularioCadastro() {
  /*
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  */
  const [nome, setNome] = useState("");

  return (
    <form
      onSubmit={(event) => {
        console.log(nome);
        event.preventDefault();
      }}
    >
      <TextField
        value={nome}
        onChange={(event) => {
          setNome(event.target.value);
          if (nome.length >= 4) {
            setNome(nome.substr(0, 4));
          }
        }}
        id="nome"
        label="Nome"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <TextField
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <TextField
        id="cpf"
        label="CPF"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <FormControlLabel
        label="Promoções"
        control={
          <Switch name="Novidades" defaultChecked={true} color="primary" />
        }
      />
      <FormControlLabel
        label="Promoções"
        control={
          <Switch name="Promoções" defaultChecked={true} color="primary" />
        }
      />

      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;
