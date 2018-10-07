import React from "react";
import {
  ContentWrapper,
  Title,
  SubTitle,
  FeaturesWrapper,
  Box,
  BoxTitle,
  Description,
  IcoAligner,
  RightBorder,
  BoxWrapper
} from "./styles";
import Icon from "../common/Icon";
import { lightBLue } from "../../styles/settings";

const featuresArray = [
  {
    title: "Flat Design",
    icon: "Monitor",
    description:
      "Donec non libero vel turpis aliquet interdum. Praesent condimentum ac ligula vel blandit."
  },
  {
    title: "Marketable",
    icon: "Target",
    description:
      "ipsum quia dolor sit amet, consectetur,  quia dolor sit amet, consectetur, adipisci velit"
  },
  {
    title: "Edit Photos",
    icon: "Landscape",
    description:
      "Donec non libero vel turpis aliquet interdum. Praesent condimentum ac ligula vel blandit."
  },
  {
    title: "Edit Colors",
    icon: "Palette",
    description:
      "Donec non libero vel turpis aliquet interdum. Praesent condimentum ac ligula vel blandit."
  },
  {
    title: "User Friendly",
    icon: "User",
    description:
      "ipsum quia dolor sit amet, consectetur, Donec non libero vel turpis aliquet interdum."
  },
  {
    title: "100% Editable",
    icon: "Gear",
    description:
      "Donec non libero vel turpis aliquet interdum. Praesent condimentum ac ligula vel blandit."
  }
];
function Content() {
  return (
    <ContentWrapper>
      <Title> Craze Features </Title>
      <SubTitle>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
        eleifend convallis. In rhoncus at magna eu faucibus. Nam condimentum
        nisi nibh. convallis. In rhoncus at magna eu faucibus. Nam condimentum
        nisi nibh.
      </SubTitle>
      <FeaturesWrapper>
        {featuresArray.map(c => (
          <Box>
            <IcoAligner>
              <Icon type={c.icon} height={60} width={60} color={lightBLue} />
            </IcoAligner>
            <BoxTitle>{c.title}</BoxTitle>
            <Description>{c.description}</Description>
          </Box>
        ))}
      </FeaturesWrapper>
    </ContentWrapper>
  );
}

export default Content;
