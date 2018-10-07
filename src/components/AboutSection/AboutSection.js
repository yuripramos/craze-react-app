import React from "react";
import { string } from "prop-types";
import {
  ContentWrapper,
  Description,
  Title,
  VideoWrapper,
  BulletWrapper,
  BulletText
} from "./styles";
import Icon from "../common/Icon";
import { Container, Row, Column } from "../../styles/grid";
import { trueBlack } from "../../styles/settings";
function AboutSection({ video, videoFallback, text, title, bullets }) {
  const width = 500;
  const height = 285;
  return (
    <ContentWrapper>
      <Container>
        <Row>
          <Column>
            <Title>{title}</Title>
            <Description>{text}</Description>
            {bullets.map((c, i) => (
              <BulletWrapper key={i}>
                <Icon type="Bullet" color={trueBlack} width={20} height={20} />
                <BulletText>{c}</BulletText>
              </BulletWrapper>
            ))}
          </Column>
          <Column>
            <VideoWrapper width={width} height={height}>
              <video width={width} height={height} controls>
                <source src={video} type="video/mp4" />
                <source src={videoFallback} type="video/ogg" />
                Your browser does not support HTML5 video.
              </video>
            </VideoWrapper>
          </Column>
        </Row>
      </Container>
    </ContentWrapper>
  );
}
AboutSection.propTypes = {
  video: string,
  videoFallback: string,
  text: string,
  bullets: string,
  title: string
};

export default AboutSection;
