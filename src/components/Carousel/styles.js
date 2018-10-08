import styled, { css } from "styled-components";
import { findAll } from "styled-components/test-utils";
import { rem, media } from "../../styles/tools";
import { black40, white, grey10, lightBLue } from "../../styles/settings";

export const ContentWrapper = styled.div`
  text-align: center;
  margin-left: ${rem(-20)};
  margin-right: ${rem(-20)};
  background: ${white};
`;

export const TestimonialCarousel = styled.div`
  background: ${white};
  overflow: hidden;
  height: ${rem(260)};
  position: relative;
  padding: ${rem(20)} ${rem(0)};
  display: flex;
`;

export const LeftArrow = styled.span`
  color: #dadada;
  font-size: 1.6em;
  width: ${rem(40)};
  height: ${rem(40)};
  cursor: pointer;
  background: ${lightBLue};
  transition: color 0.3s linear;
`;

export const ControlWrapper = styled.div`
  ${({ width }) =>
    width &&
    css`
      width: ${width};
    `};
  ${({ height }) =>
    height &&
    css`
      height: ${height};
    `};
  opacity: 0.5;
`;

export const RightArrow = styled.span`
  color: #dadada;
  width: ${rem(40)};
  background: ${lightBLue};
  height: ${rem(40)};
  font-size: 1.6em;
  cursor: pointer;
  transition: color 0.3s linear;
`;

export const TestimonialItems = styled.div`
  position: relative;
  flex: 1;
  overflow: hidden;
  color: ${grey10};
  font-family: "Helveticaneue Thin";
  font-size: ${rem(24)};
`;
export const Li = styled.span`
  width: ${rem(25)};
  height: ${rem(25)};
  background: ${white};
  border: solid ${rem(2)} ${lightBLue};
  margin: ${rem(10)};
  border-radius: 50%;
  ${({ active }) =>
    active &&
    css`
      background: ${lightBLue};
    `};
`;

export const TestimonialItem = styled.div`
  width: 100%;
  height: 100%;
  transition: transform 1s;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${({ position }) =>
    position === "first" &&
    css`
      left: 0;
    `};
  ${({ position }) =>
    position === "second" &&
    css`
      left: 100%;
    `};
  ${({ position }) =>
    position === "third" &&
    css`
      left: 200%;
    `};
`;

export const Author = styled.div`
  font-weight: bold;
  color: ${black40}
  text-align: center;
  font-family: "MyriadPro SemiBold";
  font-size: ${rem(18)};
`;

export const Paragraph = styled.p`
  font-size: ${rem(24)};
`;

export const ActiveTestimonial = styled.div`
  display: inline-flex;
`;
