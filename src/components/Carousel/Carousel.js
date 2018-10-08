import React, { Component } from "react";
import {
  ContentWrapper,
  TestimonialItems,
  TestimonialItem,
  Paragraph,
  Author,
  ControlWrapper,
  TestimonialCarousel
} from "./styles";
import Icon from "../common/Icon";
import { Container, Row, Column } from "../../styles/grid";
import { CarouselAuto } from "../../utils/Carousel";
import { lightBLue } from "../../styles/settings";

class Carousel extends Component {
  componentDidMount() {
    CarouselAuto();
  }
  render() {
    return (
      <ContentWrapper>
        <Container>
          <Row>
            <Column>
              <TestimonialCarousel>
                <ControlWrapper width={30} height={30}>
                  <Icon
                    type="Arrow"
                    color={lightBLue}
                    width={30}
                    height={30}
                    className="lnr"
                    style={{ cursor: "pointer" }}
                  />
                </ControlWrapper>

                <TestimonialItems>
                  <TestimonialItem
                    className="testimonial-item"
                    position="first"
                  >
                    <Paragraph>
                      Donec sed tempor nunc. Etiam nec tortor euismod,
                      ullamcorper massa ut, commodo mauris. Etiam non ex posuere
                      arcu porttitor gravida
                    </Paragraph>
                    <Author>— H Scott, Edinburgh</Author>
                  </TestimonialItem>
                  <TestimonialItem
                    className="testimonial-item"
                    position="second"
                  >
                    <Paragraph>
                      Nunc eleifend porttitor ipsum eget tristique suspendisse
                      at sem sollicitudin, cursus massa eget, aliquet mi,
                      Vivamus ut congue es
                    </Paragraph>
                    <Author>— Nicola, Leith, Edinburgh</Author>
                  </TestimonialItem>
                  <TestimonialItem
                    className="testimonial-item"
                    position="third"
                  >
                    <Paragraph>
                      Pellentesque habitant morbi tristique senectus et netus et
                      malesuada fames ac turpis egestas, vestibulum venenatis
                      arcu id turpis volutpat cursus
                    </Paragraph>
                    <Author>— W S Khan, Lothian Road, Edinburgh</Author>
                  </TestimonialItem>
                  {/* <ActiveTestimonial>
                    <Li active />
                    <Li active />
                    <Li active />
                  </ActiveTestimonial> */}
                </TestimonialItems>
                <ControlWrapper width={30} height={30}>
                  <Icon
                    type="Arrow"
                    color={lightBLue}
                    width={30}
                    height={30}
                    className="lnr"
                    style={{ cursor: "pointer", transform: "rotate(180deg)" }}
                  />
                </ControlWrapper>
              </TestimonialCarousel>
            </Column>
          </Row>
        </Container>
      </ContentWrapper>
    );
  }
}
// Carousel.propTypes = {
// };

export default Carousel;
