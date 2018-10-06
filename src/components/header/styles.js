import styled, { css } from "styled-components";
import { rem, media } from "../../styles/tools";
import { white } from "../../styles/settings";

export const HeaderWrapper = styled.header`
  height: ${rem(84)};
  background-color: ${white};
  padding-top: ${rem(10)};

  ${media.md(css`
    padding-top: ${rem(6)};
  `)};
`;

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: black;
`;
