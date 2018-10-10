import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { Header, Footer } from "./Components/Layout";
import Exercices from "./Components/Exercices/";
import "./styles.css";

class App extends Component {
  render() {
    return (
      <fragment>
        <Header />
        <Exercices />
        <Footer />
      </fragment>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
