import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { Header, Footer } from "./Components/Layout";
import Exercices from "./Components/Exercices/";
import { muscles, exercises } from "./store";
import "./styles.css";

class App extends Component {
  state = { exercises };

  getExercicesByMuscles = () => {
    return this.state.exercises.reduce((exercices, exercice) => {
      const { muscles } = exercice;

      exercices[muscles] = exercices[muscles]
        ? [...exercices[muscles], exercice]
        : [exercice];

      return exercices;
    }, {});
  };

  render() {
    console.log(this.getExercicesByMuscles());
    return (
      <fragment>
        <Header />
        <Exercices exercises={this.getExercicesByMuscles} />
        <Footer muscles={muscles} />
      </fragment>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
