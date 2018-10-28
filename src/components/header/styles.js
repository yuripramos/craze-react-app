import styled, { css } from "styled-components";
import { rem, media } from "../../styles/tools";
import { white, trueBlack } from "../../styles/settings";

import bg from "../../assets/images/header_bg.png";

export const HeaderWrapper = styled.header`
  height: ${rem(398)};
  background: url(${bg}) repeat-x;
  padding-top: ${rem(10)};
  text-align: center;
  ${media.md(css`
    text-align: left;
  `)};
  ${media.lg(css`
    height: ${rem(598)};
    padding-top: ${rem(6)};
  `)};
`;

export const Title = styled.h1`
  font-family: "Pacifico";
  font-size: ${rem(72)};
  text-align: center;
  color: ${white};
  text-shadow: ${rem(3)} ${rem(3)} rgba(0, 0, 0, 0.25);
  ${media.md(css`
    text-align: left;
  `)};
`;

export const SubTitle = styled.h2`
  font-family: "Helveticaneue Medium";
  font-size: ${rem(24)};
  text-align: center;
  color: ${white};
  text-shadow: ${rem(3)} ${rem(3)} rgba(0, 0, 0, 0.25);
  ${media.md(css`
    width: ${rem(460)};
    text-align: left;
  `)};
`;

export const IconWrapper = styled.div`
  width: ${rem(70)};
  height: ${rem(55)};
  background: ${trueBlack};
  border-radius: ${rem(40)};
  opacity: 0.5;
  margin: ${rem(5)};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  :hover {
    opacity: 1;
  }
`;

export const ListIcons = styled.div`
  display: inline-flex;
  width: ${rem(200)};
  margin-top: ${rem(15)};
`;

export const FeaturedImage = styled.div`
  ${media.md(css`
    transform: translateY(48px);
  `)};
  ${media.lg(css`
    transform: translateY(92px);
  `)};
`;

export const ImgHeader = styled.img`
  width: ${rem(320)};
  height: ${rem(350)};
  ${media.md(css``)};
  ${media.lg(css`
    width: ${rem(488)};
    height: ${rem(500)};
  `)};
`;
