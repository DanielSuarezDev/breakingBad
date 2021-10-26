import React, { useState } from "react";
import styled from "@emotion/styled";
import { Frase } from "./components/Frase";

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column-reverse;
`;

const Boton = styled.button`
  background: #007d35;
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
`;

function App() {
  const [frase, setFrase] = useState({});
  const [num, setNum] = useState(0);

  const consultApi = async () => {
    const api = await fetch("https://www.breakingbadapi.com/api/quotes");
    const frase = await api.json();

    if (num === 70) {
      return setNum(num === 0);
    }
    setNum(num + 1);
    setFrase(frase[num]);
  };

  return (
    <Container>
      <Boton onClick={consultApi}>Obtener frase</Boton>
      <Frase frase={frase} />
    </Container>
  );
}

export default App;
