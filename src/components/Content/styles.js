import styled, { css } from "styled-components";
import { rem, media } from "../../styles/tools";
import { black50 } from "../../styles/settings";

export const ContentWrapper = styled.div`
  text-align: center;
  padding: ${rem(25)} ${rem(10)};

  ${media.md(css`
    padding: ${rem(50)} ${rem(10)};
  `)};
`;
