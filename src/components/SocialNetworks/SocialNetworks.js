import React from "react";
import { string } from "prop-types";
import {
  ContentWrapper,
  SubTitle,
  Title,
  ListIcons,
  IconWrapper
} from "./styles";
import Icon from "../common/Icon";
import { Container, Row, Column } from "../../styles/grid";
import { white } from "../../styles/settings";

const Icons = [
  "Twitter",
  "Facebook",
  "Pinterest",
  "GooglePlus",
  "LinkedIn",
  "Youtube"
];

function SocialNetworks({ title, description }) {
  return (
    <ContentWrapper>
      <Container>
        <Row>
          <Column>
            <Title>{title}</Title>
            <SubTitle>{description}</SubTitle>
            <ListIcons>
              {Icons.map((c, i) => (
                <IconWrapper key={i}>
                  <Icon type={c} height={25} width={25} color={white} />
                </IconWrapper>
              ))}
            </ListIcons>
          </Column>
        </Row>
      </Container>
    </ContentWrapper>
  );
}
SocialNetworks.propTypes = {
  description: string,
  title: string
};

export default SocialNetworks;
