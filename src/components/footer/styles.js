import styled, { css } from "styled-components";
import { rem, media } from "../../styles/tools";
import { grey10, grey30 } from "../../styles/settings";

export const ContentWrapper = styled.div`
  background: ${grey30};

  padding: ${rem(35)} 0;
`;

export const ListLinks = styled.div`
  color: ${grey10};
  font-family: "Helveticaneue Thin";
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: ${rem(15)};
  width: 100%;
`;

export const Links = styled.a`
  padding: ${rem(10)} ${rem(20)};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
