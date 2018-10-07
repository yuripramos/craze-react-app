import styled, { css } from "styled-components";
import { rem, media } from "../../styles/tools";
import { lightgrey, trueBlack, grey10 } from "../../styles/settings";

export const ContentWrapper = styled.div`
  text-align: center;
  margin-left: ${rem(-20)};
  margin-right: ${rem(-20)};
  background: ${lightgrey};
  height: ${rem(300)};
  padding: ${rem(20)} ${rem(10)};
  ${media.md(css`
    padding: ${rem(60)} ${rem(10)};
  `)};
`;

export const Title = styled.h2`
  font-family: "MyriadPro SemiBold";
  font-size: ${rem(30)};
  color: ${trueBlack};
  text-align: left;
  margin-top: 0;
`;

export const Description = styled.h3`
  font-family: "Helveticaneue Thin";
  font-weight: normal;
  font-size: ${rem(16)};
  color: ${grey10};
  width: ${rem(510)};
  text-align: left;
`;

export const VideoWrapper = styled.div`
  border-radius: ${rem(10)};
  overflow: hidden;
  ${({ width }) =>
    width &&
    css`
      width: ${rem(width)};
    `};
  ${({ height }) =>
    height &&
    css`
      height: ${rem(height)};
    `};
`;

export const BulletWrapper = styled.div`
  display: inline-flex;
  margin: ${rem(10)} ${rem(5)};
  color: ${grey10};
  width: 100%;
  font-size: ${rem(16)};
  text-align: left;
  font-family: "Helveticaneue Thin";
`;

export const BulletText = styled.span`
  margin-top: ${rem(-5)};
`;
