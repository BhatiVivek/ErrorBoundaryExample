import React, { Component } from "react";

import ErrorBoundary from "./ErrorBoundary";
import Header from "./header";
import "./styles.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ErrorBoundary>
          <Header headerName="Sandbox" />
          <Header headerName="Sandbox1" />
        </ErrorBoundary>
        <h2>Start editing to see some magic happen!</h2>
        <input type="submit" value="click here" />
      </div>
    );
  }
}

export default App;
