import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { Header, Footer } from "./Components/Layout/index";
import "./styles.css";

class App extends Component {
  render() {
    return (
      <fragment>
        <Header />
        <Footer />
      </fragment>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
