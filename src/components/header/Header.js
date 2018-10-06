import React, { Component } from "react";

function increaseScore(state) {
  return { score: state.score + 1 };
}
// Functional setState example

class Header extends Component {
  constructor(props) {
    super(props);
    this.handleIncreaseScore = this.handleIncreaseScore.bind(this);
  }

  handleIncreaseScore() {
    this.setState(increaseScore);
  }

  render() {
    return (
      <div>
        <div className="col-12">
          <h1> React JW2 boilerplate </h1>
        </div>
      </div>
    );
  }
}

export default Header;
