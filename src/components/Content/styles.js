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
`;

export const SubTitle = styled.h2`
  margin-top: ${rem(30)};
  font-family: "Helveticaneue";
  font-size: ${rem(16)};
  color: ${grey10};
  padding: ${rem(0)} ${rem(80)};
`;

export const FeaturesWrapper = styled.div`
  padding: ${rem(10)};
`;

export const Box = styled.div`
  margin: ${rem(5)} ${rem(50)} ${rem(4)} ${rem(50)};
  padding-bottom: ${rem(50)};
  display: inline-grid;
  flex-direction: row;
  align-items: center;
  border-bottom: solid 1px ${grey20};
  width: 21%;
  height: ${rem(240)};
`;

export const BoxWrapper = styled.div`
  background: red;
`;
export const RightBorder = styled.div`
  height: ${rem(210)};
  width: ${rem(2)};
  align-items: center;
  border-right: solid 1px ${grey20};
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
  font-family: "Helveticaneue";
  font-size: ${rem(16)};
  color: ${grey10};
`;
