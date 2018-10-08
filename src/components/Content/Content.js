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
  ContainerWithRightBorder
} from "./styles";
import video from "../../assets/video/Big_Buck_Bunny.mp4";
import videoFallback from "../../assets/video/Big_Buck_Bunny.ogv";
import { Container, Row, Column } from "../../styles/grid";
import { lightBLue } from "../../styles/settings";
import Icon from "../common/Icon";

import Carousel from "../Carousel";
import AboutSection from "../AboutSection";
import PricingPlans from "../PricingPlans";
import SocialNetworks from "../SocialNetworks";

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

const PricingPlansArray = [
  {
    title: "Basic",
    price: "$19.99",
    bestOffer: false,
    features: ["feature1", "feature2", "feature3", "feature4", "feature5"]
  },
  {
    title: "Standard",
    price: "$39.99",
    bestOffer: false,
    features: ["feature1", "feature2", "feature3", "feature4", "feature5"]
  },
  {
    title: "Deluxe",
    price: "$59.99",
    bestOffer: true,
    features: [
      "feature1",
      "feature2",
      "feature3",
      "feature4",
      "feature5",
      "feature6"
    ]
  },
  {
    title: "Unlimited",
    price: "$79.99",
    bestOffer: false,
    features: ["feature1", "feature2", "feature3", "feature4", "feature5"]
  }
];
function Content() {
  return (
    <ContentWrapper>
      <Container>
        <Row>
          <Column>
            <Title> Craze Features </Title>
            <SubTitle>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              euismod eleifend convallis. In rhoncus at magna eu faucibus. Nam
              condimentum nisi nibh. convallis. In rhoncus at magna eu faucibus.
              Nam condimentum nisi nibh.
            </SubTitle>
            <FeaturesWrapper>
              {featuresArray.map((c, i) => (
                <ContainerWithRightBorder key={i}>
                  <Box order={i}>
                    <IcoAligner>
                      <Icon
                        type={c.icon}
                        height={60}
                        width={60}
                        color={lightBLue}
                      />
                    </IcoAligner>
                    <BoxTitle>{c.title}</BoxTitle>
                    <Description>{c.description}</Description>
                  </Box>
                  <RightBorder order={i} />
                </ContainerWithRightBorder>
              ))}
            </FeaturesWrapper>
          </Column>
        </Row>
      </Container>
      <AboutSection
        bullets={["lorem ipsum lorem remmm", "lorem child child parent"]}
        video={video}
        videoFallback={videoFallback}
        title="Whats Craze all About"
        text="Duis non gravida felis. Orci varius natoque penatibus et magnis dis
         parturient montes, nascetur ridiculus mus. Donec ut venenatis eros.
         Fusce accumsan varius placerat. Vestibulum sed placerat ante, et varius nulla.
          Sed sit amet felis justo. Pellentesque vehicula sapien orci

          Vestibulum sed placerat ante, et varius nulla.
          Sed sit amet felis justo. ridiculus mus. Donec ut venenatis eros."
      />
      <Carousel />
      <PricingPlans
        plans={PricingPlansArray}
        title="Pricing Plans"
        description="Fusce accumsan varius placerat.
      Vestibulum sed placerat ante, et varicerat ante, et varicerat ante, et varius null
          Sed sit amet cerat ante, et varifelis justo. Pellentesque vehicula sapien orci"
      />
      <SocialNetworks
        title="Say Hi &amp; Get in Touch"
        description="San varius placerat. Vestibulum sed placerat ante, et varicerat
        ante, et varicerat ante, et varius null Sed sit amet cerat ante, et varifelis
         justo. Pellentesque vehicula sapien or"
      />
    </ContentWrapper>
  );
}

export default Content;
