import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/counter/FirstComponent';
import SecondComponent from './components/counter/SecondComponent';
import Counter from './components/counter/Counter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter />
      </div>
    )
  }
}

class LearningComponents extends Component {
  render() {
    return (
      <div>
        <FirstComponent></FirstComponent>
        <SecondComponent></SecondComponent>
      </div>
    )
  }
}

export default App;
