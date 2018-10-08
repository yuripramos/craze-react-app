import styled, { css } from "styled-components";
import { rem, media } from "../../styles/tools";
import { trueBlack, grey10, grey20 } from "../../styles/settings";

export const ContentWrapper = styled.div`
  text-align: center;
  padding: ${rem(25)} ${rem(10)};

  ${media.md(css`
    padding: ${rem(50)} ${rem(10)};
  `)};
`;
export const Title = styled.h1`
  font-family: "MyriadPro SemiBold";
  font-size: ${rem(30)};
  color: ${trueBlack};
  margin-top: 0;
`;

export const SubTitle = styled.h2`
  margin-top: ${rem(30)};
  font-family: "Helveticaneue Thin";
  font-weight: normal;
  font-size: ${rem(16)};
  color: ${grey10};
  padding: ${rem(0)} ${rem(80)};
`;

export const FeaturesWrapper = styled.div`
  padding: ${rem(10)};
`;

export const Box = styled.div`
  margin: ${rem(5)} ${rem(20)} ${rem(4)} ${rem(20)};
  padding-bottom: ${rem(50)};
  display: inline-grid;
  flex-direction: row;
  align-items: center;
  height: ${rem(120)};
  ${media.lg(css`
    ${({ order }) =>
      order > 2 &&
      css`
        border: 0;
      `};
    height: ${rem(200)};
  `)};
  ${media.md(css`
    border-bottom: solid 1px ${grey20};
  `)};
`;

export const ContainerWithRightBorder = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  ${media.sm(css`
    width: 30%;
  `)};
`;

export const RightBorder = styled.div`
  height: ${rem(210)};
  width: ${rem(2)};
  align-items: center;

  ${({ order }) =>
    (order === 2 || order === 5) &&
    css`
      border: 0;
    `};
  ${media.sm(css`
    border-right: solid 1px ${grey20};
  `)};
`;
export const IcoAligner = styled.div`
  justify-content: center;
`;

export const BoxTitle = styled.span`
  font-family: "MyriadPro SemiBold";
  font-size: ${rem(24)};
  color: ${trueBlack};
`;

export const Description = styled.span`
  font-family: "Helveticaneue Thin";
  font-size: ${rem(16)};
  color: ${grey10};
`;
