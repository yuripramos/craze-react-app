import React from "react";
import {
  HeaderWrapper,
  Title,
  SubTitle,
  ListIcons,
  IconWrapper,
  ImgHeader,
  FeaturedImage
} from "./styles";
import { Container, Row, Column } from "../../styles/grid";
import { white } from "../../styles/settings/index";
import Icon from "../common/Icon";
import Hide from "../common/Hide";

import FeaturedHandImage from "../../assets/images/featured_image_header.png";

function Header() {
  return (
    <HeaderWrapper>
      <Container>
        <Row>
          <Column>
            <Title>Craze</Title>
            <SubTitle>
              {" "}
              A great new free psd theme to showcase your new app.{" "}
            </SubTitle>
            <ListIcons>
              <IconWrapper>
                <Icon type="AndroidLogo" height={33} width={33} color={white} />
              </IconWrapper>
              <IconWrapper>
                <Icon type="AppleLogo" height={33} width={33} />
              </IconWrapper>
              <IconWrapper>
                <Icon type="MicrosoftLogo" height={33} width={33} />
              </IconWrapper>
            </ListIcons>
          </Column>
          <Hide below="md">
            <Column>
              <FeaturedImage>
                <ImgHeader
                  src={FeaturedHandImage}
                  alt="handing holding a smartphone"
                />
              </FeaturedImage>
            </Column>
          </Hide>
        </Row>
      </Container>
    </HeaderWrapper>
  );
}

export default Header;
