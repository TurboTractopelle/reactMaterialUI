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

  getExercicesByMuscles = () => {
    //on crée un tableau qui contient les muscles dans des array vide

    const init = muscles.reduce((acc, item) => {
      return { ...acc, [item]: "" };
    }, {});

    return Object.entries(
      this.state.exercises.reduce((acc, item) => {
        const cle = item.muscles;
        acc[cle] = acc[cle] ? [...acc[cle], item] : [item];
        return acc;
      }, init)
    );
  };

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

  submitExercice = obj => {
    this.setState(prevState => {
      const id = obj.title.toLocaleLowerCase().replace(/ /g, "-");
      const obj2 = { ...obj, id: id };
      return { ...prevState, exercises: [...prevState.exercises, obj2] };
    });
  };

  handleDeleteExercice = id => {
    this.setState(prevState => {
      const filteredExercices = prevState.exercises.filter(
        item => item.id !== id
      );
      const monState = { ...prevState, exercises: [...filteredExercices] };
      return monState;
    });
  };

  render() {
    const exos = this.getExercicesByMuscles();
    const { category, exercice } = this.state;

    return (
      <fragment>
        <Header muscles={muscles} submitExercice={this.submitExercice} />
        <Exercices
          exos={exos}
          exercice={exercice}
          category={category}
          onSelect={this.handleExerciceSelected}
          deleteExercice={this.handleDeleteExercice}
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
