import styled, { css } from "styled-components";
import { rem, media } from "../../styles/tools";
import { white } from "../../styles/settings";

import bg from "../../assets/images/header_bg.png";

export const HeaderWrapper = styled.header`
  height: ${rem(398)};
  background: url(${bg}) repeat-x;
  padding-top: ${rem(10)};

  ${media.lg(css`
    height: ${rem(598)};
    padding-top: ${rem(6)};
  `)};
`;

export const Title = styled.h1`
  font-family: "Pacifico";
  font-size: 1.5em;
  text-align: center;
  color: black;
`;
