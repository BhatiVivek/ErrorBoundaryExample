import React, { Component } from "react";
import "./styles.css";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  static getDrivedStateFromError(error) {
    return {
      hasError: true
    };
  }

  render() {
    if (this.state.hasError) {
      return <h1>Error Occured</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
