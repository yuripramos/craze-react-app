import React from "react";
import { string, array } from "prop-types";
import { getDollars, getCents } from "../../utils/formatNumbers";
import {
  ContentWrapper,
  Description,
  Title,
  PricingPlansWrapper,
  Box,
  BoxTitle,
  Price,
  Footer,
  Feature,
  Button,
  MiddleWrapper,
  OutOfBoundsController,
  Cents
} from "./styles";
import { Container, Row, Column } from "../../styles/grid";

function PricingPlans({ description, title, plans }) {
  return (
    <ContentWrapper>
      <Container>
        <Row>
          <Column>
            <Title>{title}</Title>
            <Description>{description}</Description>
            <OutOfBoundsController>
              {plans.map((c, i) => (
                <PricingPlansWrapper key={i}>
                  <Box biggerBox={c.bestOffer}>
                    <BoxTitle biggerBox={c.bestOffer}>{c.title}</BoxTitle>
                    <MiddleWrapper>
                      <Price>
                        {getDollars(c.price)}
                        <Cents> {getCents(c.price)} </Cents>
                      </Price>
                      {c.features.map((k, i) => (
                        <Feature key={i}>{k}</Feature>
                      ))}
                    </MiddleWrapper>
                    <Footer biggerBox={c.bestOffer}>
                      <Button biggerBox={c.bestOffer}>purchase</Button>
                    </Footer>
                  </Box>
                </PricingPlansWrapper>
              ))}
            </OutOfBoundsController>
          </Column>
        </Row>
      </Container>
    </ContentWrapper>
  );
}
PricingPlans.propTypes = {
  description: string,
  title: string,
  plans: array
};

export default PricingPlans;
