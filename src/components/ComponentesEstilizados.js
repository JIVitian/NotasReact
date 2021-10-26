import React from "react";
import styled, {
  css,
  keyframes,
  ThemeProvider,
  createGlobalStyle,
} from "styled-components";

export default function ComponentesEstilizados() {
  let mainColor = "#db7093",
    mainAlphaColor80 = "#db709380";

  const setTransitionTime = (time) => `all ${time} ease-in-out`;

  const fadeIn = keyframes`
  0% {
    opacity:0;
  }

  100% {
    opacity:1;
  }
  `;

  // Puedo darle estilo y luego llamarlo como si fuera un componentes mas
  const MyH3 = styled.h3`
    padding: 2rem;
    text-align: center;
    color: ${(props) => props.color};
    color: ${({ color }) => color};
    color: ${({ color }) => color || "#000"};
    background-color: ${mainColor};
    transition: ${setTransitionTime("1s")};
    animation: ${fadeIn} 2s ease-out;

    ${({ isButton }) =>
      isButton &&
      css`
        margin: auto;
        max-width: 50%;
        border-radius: 0, 25rem;
        cursor: pointer;
      `}

    &:hover {
      background-color: ${mainAlphaColor80};
    }
  `;

  const light = {
    color: "#222",
    bgColor: "#DDD",
  };

  const dark = {
    color: "#DDD",
    bgColor: "#222",
  };

  const Box = styled.div`
    padding: 1rem;
    margin: 1rem;
    color: ${({ theme }) => theme.color};
    background-color: ${({ theme }) => theme.bgColor};
  `;

  // Este componente hereda del componente Box
  const BoxRounded = styled(Box)`
    border-radius: 1rem;
  `;

  const GlobalStyle = createGlobalStyle`
    h2 {
      padding:2rem;
      background-color:#fff;
      color:#61dafb;
      text-transform:uppercase;
    }
  `;

  return (
    <div>
      <GlobalStyle />
      <h2>Componentes estilizados</h2>
      <MyH3>Hola Soy un H3 estilizado con styled-components</MyH3>
      <MyH3 color="#61dafb">
        Hola Soy un H3 estilizado con styled-components
      </MyH3>
      <MyH3 isButton>Soy un h3 estilizado como un boton</MyH3>
      <ThemeProvider theme={light}>
        <Box>Soy una caja Light</Box>
        <BoxRounded>Soy una caja Light Redondeada</BoxRounded>
      </ThemeProvider>
      <ThemeProvider theme={dark}>
        <Box>Soy una caja dark</Box>
        <BoxRounded>Soy una caja dark Redondeada</BoxRounded>
      </ThemeProvider>
    </div>
  );
}
