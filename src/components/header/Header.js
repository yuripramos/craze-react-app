import React from "react";
import { HeaderWrapper, Title } from "./styles";
import { Container } from "../../styles/grid";
function Header() {
  return (
    <HeaderWrapper>
      <Container>
        <Title>Hello World, this is my first styled component!</Title>
      </Container>
    </HeaderWrapper>
  );
}

export default Header;
