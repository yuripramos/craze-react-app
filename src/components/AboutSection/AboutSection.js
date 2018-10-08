import React from "react";
import { string, array } from "prop-types";
import {
  ContentWrapper,
  Description,
  Title,
  VideoWrapper,
  BulletWrapper,
  BulletText,
  ResponsiveWrapper
} from "./styles";
import Icon from "../common/Icon";
import { Container, Row, Column } from "../../styles/grid";
import { trueBlack } from "../../styles/settings";
import Hide from "../common/Hide";
import { SCREEN_XS, RESPONSIVE_VIDEO_HEIGHT } from "../../utils/constants";

function AboutSection({ video, videoFallback, text, title, bullets }) {
  const width = 500;
  const height = 285;
  return (
    <ResponsiveWrapper>
      <ContentWrapper>
        <Container>
          <Row>
            <Column>
              <Title>{title}</Title>
              <Description>{text}</Description>
              {bullets.map((c, i) => (
                <BulletWrapper key={i}>
                  <Icon
                    type="Bullet"
                    color={trueBlack}
                    width={20}
                    height={20}
                  />
                  <BulletText>{c}</BulletText>
                </BulletWrapper>
              ))}
            </Column>
            <Hide below="md">
              <Column>
                <VideoWrapper width={width} height={height}>
                  <video width={width} height={height} controls>
                    <source src={video} type="video/mp4" />
                    <source src={videoFallback} type="video/ogg" />
                    Your browser does not support HTML5 video.
                  </video>
                </VideoWrapper>
              </Column>
            </Hide>
          </Row>
          <Hide above="md">
            <Row>
              <Column>
                <VideoWrapper>
                  <video
                    width={SCREEN_XS}
                    height={RESPONSIVE_VIDEO_HEIGHT}
                    controls
                  >
                    <source src={video} type="video/mp4" />
                    <source src={videoFallback} type="video/ogg" />
                    Your browser does not support HTML5 video.
                  </video>
                </VideoWrapper>
              </Column>
            </Row>
          </Hide>
        </Container>
      </ContentWrapper>
    </ResponsiveWrapper>
  );
}
AboutSection.propTypes = {
  video: string,
  videoFallback: string,
  text: string,
  bullets: array,
  title: string
};

export default AboutSection;
