import React, { useEffect, useState } from "react";
import { Body } from "./styles";
import { Container } from "./styles";
import api from "./api/api";

export default function App() {
  const [frase, setFrase] = useState(""); //usando useState para transportar as informações vindas da api
  const [icone, setIcone] = useState("");

  const getDados = async () => {
    const response = await api.get("jokes/random"); //crio uma função para pegar as informações do end point da api
    console.log(response);
    setFrase(response.data.value); //passo o valor do json para setFrase
  };

  const getIcon = async () => {
    const response = await api.get("jokes/random");
    setIcone(response.data.icon_url);
  };

  useEffect(() => {
    getDados(); //uso useEffect para chama a função criada getDatos que tem as informações do crud
    getIcon();
  }, []); //passo um array vazio para não dar loop

  return (
    //renderizando na tela as informações // componente body vindo do styled
    <Body>
      <Container>
        <img
          className="logo"
          src="https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png"
        />
        <div className="containerTitle">
          <h1 className="title">Frases Chuck Norris</h1>
          <img className="icone" src={icone} />
        </div>
        <h1>did you know?</h1>
        <p>{frase}</p>
        <button className="botao" onClick={getDados}>
          Trocar
        </button>
      </Container>
    </Body>
  );
}
