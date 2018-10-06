import React, { Component } from "react";
import ReactDOM from "react-dom";
import styled, { ThemeProvider } from "styled-components";
import "./App.css";
import { rem } from "../styles/tools";
import Footer from "../components/footer/Footer";
import ComponentA from "../components/component_a/componentA";
import ComponentB from "../components/component_b/componentB";
import Header from "../components/header/Header";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: black;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "State 1",
      lastname: "State 2"
    };
  }
  render() {
    return (
      <ThemeProvider
        theme={{
          space: [0, rem(5), rem(10), rem(15), rem(20)],
          breakpoints: [rem(767), rem(992), rem(1199)]
        }}
      >
        <Wrapper>
          <Title>Hello World, this is my first styled component!</Title>
        </Wrapper>
      </ThemeProvider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
