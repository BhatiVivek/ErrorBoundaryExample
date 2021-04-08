import React, { Component } from "react";
import "./styles.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (this.props.headerName !== "Sandbox") {
      throw new Error("Not in sandbox");
    }
    return (
      <div className="Header">
        <h1>Hello CodeSandbox1</h1>
      </div>
    );
  }
}

export default Header;
