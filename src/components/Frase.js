import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  padding: 3rem;
  border-radius: 0.5rem;
  max-width: 800px;
  color: #fff;
  font-size: 0.8rem;
`;

export const Frase = ({ frase }) => {
  return (
    <Container>
      <h1>{frase.quote}</h1>
      <p>{frase.author}</p>
    </Container>
  );
};
