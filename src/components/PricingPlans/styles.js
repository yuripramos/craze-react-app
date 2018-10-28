import styled, { css } from "styled-components";
import { rem, media } from "../../styles/tools";
import {
  trueBlack,
  grey10,
  lightBLue,
  white10,
  white,
  blue,
  grey20,
  lightgrey,
  Green10,
  Green20
} from "../../styles/settings";

export const ContentWrapper = styled.div`
  text-align: center;
  margin-left: ${rem(-20)};
  margin-right: ${rem(-20)};
  background: ${lightgrey};
  padding: ${rem(20)} ${rem(10)};
  ${media.lg(css`
    height: ${rem(580)};
  `)};
`;
export const Title = styled.h2`
  font-family: "MyriadPro SemiBold";
  font-size: ${rem(30)};
  color: ${trueBlack};
  text-align: center;
`;

export const Description = styled.h3`
  font-family: "Helveticaneue Thin";
  font-weight: normal;
  font-size: ${rem(16)};
  color: ${grey10};
  text-align: center;
`;

export const PricingPlansWrapper = styled.div`
  display: inline-flex;
`;

export const Box = styled.div`
  height: ${rem(420)};
  width: ${rem(290)};
  text-align: center;
  display: inline-grid;
  flex-direction: row;
  margin: ${rem(20)};
  ${media.lg(css`
    margin: ${rem(0)} ${rem(2)};
  `)};
  background: ${white};
  ${({ biggerBox }) =>
    biggerBox &&
    css`
      ${media.lg(css`
        transform: translateY(-20px);
        height: ${rem(460)};
      `)};
    `};
`;

export const MiddleWrapper = styled.div`
  display: inline-grid;
  flex-direction: row;
  padding: 0 ${rem(20)};
`;

export const BoxTitle = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: "MyriadPro SemiBold";
  font-size: ${rem(28)};
  background: ${lightBLue};
  color: ${white10};
  ${({ biggerBox }) =>
    biggerBox &&
    css`
      background: ${Green10};
      ${media.lg(css`
        background: ${lightBLue};
      `)};
    `};
`;

export const Price = styled.span`
  font-family: "Novecento DemiBold";
  font-size: ${rem(42)};
  color: ${trueBlack};
`;

export const Feature = styled.span`
  width: 100%;
  border-top: solid 1px ${grey20};
  color: ${grey10};
  font-family: "Helveticaneue Thin";
  padding: ${rem(5)};
`;

export const Footer = styled.div`
  background: ${lightBLue};
  ${({ biggerBox }) =>
    biggerBox &&
    css`
      background: ${Green10};
      ${media.lg(css`
        background: ${lightBLue};
      `)};
    `};
`;

export const Button = styled.button`
  transform: translateY(25px);
  border: 0;
  text-decoration: none;
  background: ${blue};
  width: ${rem(140)};
  height: ${rem(40)};
  justify-content: center;
  color: ${white};
  font-size: ${rem(15)};
  font-family: "MyriadPro Bold";
  text-transform: uppercase;
  cursor: pointer;
  ${({ biggerBox }) =>
    biggerBox &&
    css`
      background: ${Green20};
      ${media.lg(css`
        background: ${blue};
      `)};
    `};
`;

export const OutOfBoundsController = styled.div`
  ${media.lg(css`
    transform: translateY(110px);
  `)};
`;

export const Cents = styled.span`
  font-family: "Novecento DemiBold";
  font-size: ${rem(24)};
  color: ${trueBlack};
  position: relative;
  top: -10px;
`;
