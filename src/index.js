import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { Header, Footer } from "./Components/Layout";
import Exercices from "./Components/Exercices/";
import { muscles, exercises } from "./store";
import "./styles.css";

class App extends Component {
  state = {
    exercises,
    category: "All",
    exercice: {}
  };

  getExercicesByMuscles = () =>
    Object.entries(
      this.state.exercises.reduce((acc, item) => {
        const cle = item.muscles;
        acc[cle] = acc[cle] ? [...acc[cle], item] : [item];
        return acc;
      }, {})
    );

  handleSelectCategory = category => {
    this.setState({
      category
    });
  };

  handleExerciceSelected = id => {
    this.setState(prevState => ({
      exercice: prevState.exercises.find(item => item.id === id)
    }));
  };

  render() {
    const exos = this.getExercicesByMuscles();
    const { category, exercice } = this.state;

    return (
      <fragment>
        <Header muscles={muscles} />
        <Exercices
          exos={exos}
          exercice={exercice}
          category={category}
          onSelect={this.handleExerciceSelected}
        />
        <Footer
          muscles={muscles}
          category={category}
          onSelect={this.handleSelectCategory}
        />
      </fragment>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
