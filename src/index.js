import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { Header, Footer } from "./Components/Layout";
import Exercices from "./Components/Exercices/";
import { muscles, exercises } from "./store";
import "./styles.css";

class App extends Component {
  state = { exercises };

  getExercicesByMuscles = () =>
    Object.entries(
      this.state.exercises.reduce((acc, item) => {
        const cle = item.muscles;
        acc[cle] = acc[cle] ? [...acc[cle], item] : [item];
        return acc;
      }, {})
    );

  render() {
    const exos = this.getExercicesByMuscles();
    console.log(exos);
    return (
      <fragment>
        <Header />
        <Exercices exos={exos} />
        <Footer muscles={muscles} />
      </fragment>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
