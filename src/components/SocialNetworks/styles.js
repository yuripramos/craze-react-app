import styled, { css } from "styled-components";
import { rem, media } from "../../styles/tools";
import { trueBlack, grey10, lightBLue } from "../../styles/settings";

export const ContentWrapper = styled.div`
  text-align: center;
  padding: ${rem(25)} ${rem(10)};
  margin-left: ${rem(-20)};
  margin-right: ${rem(-20)};
  ${media.md(css`
    padding: ${rem(100)} ${rem(10)} ${rem(0)} ${rem(10)};
  `)};
`;

export const Title = styled.h1`
  font-family: "MyriadPro SemiBold";
  font-size: ${rem(30)};
  color: ${trueBlack};
  margin-top: ${rem(35)};
`;

export const SubTitle = styled.h2`
  margin-top: ${rem(30)};
  font-family: "Helveticaneue Thin";
  font-weight: normal;
  font-size: ${rem(16)};
  color: ${grey10};
  padding: ${rem(0)} ${rem(80)};
`;

export const IconWrapper = styled.div`
  width: ${rem(55)};
  height: ${rem(40)};
  background: ${trueBlack};
  border-radius: ${rem(40)};
  opacity: 0.3;
  margin: ${rem(5)};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  :hover {
    opacity: 1;
    background: ${lightBLue};
  }
`;

export const ListIcons = styled.div`
  display: inline-flex;
  width: ${rem(300)};
  margin-top: ${rem(15)};
`;
