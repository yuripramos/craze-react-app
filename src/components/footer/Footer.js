import React from "react";
import { Links, ListLinks, ContentWrapper } from "./styles";
import { Container, Row, Column } from "../../styles/grid";

const Menu = [
  "Contact",
  "Download",
  "Press",
  "Email",
  "Support",
  "Privacy Policy"
];

function Footer() {
  return (
    <ContentWrapper>
      <Container>
        <Row>
          <Column>
            <ListLinks>
              {Menu.map((c, i) => (
                <Links key={i}>{c}</Links>
              ))}
            </ListLinks>
          </Column>
        </Row>
      </Container>
    </ContentWrapper>
  );
}

export default Footer;
