import React, { Fragment, Component } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";

import "./App.css";
import "../styles/settings/fonts";

import { rem } from "../styles/tools";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Content from "../components/Content";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ThemeProvider
        theme={{
          space: [0, rem(5), rem(10), rem(15), rem(20)],
          breakpoints: [rem(767), rem(992), rem(1199)]
        }}
      >
        <Fragment>
          <Header />
          <Content />
          <Footer />
        </Fragment>
      </ThemeProvider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
