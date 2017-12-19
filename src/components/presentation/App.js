import React, { Component } from 'react';
import Header from '../containers/Header';
import Results from '../containers/Results';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Results />
      </div>
    );
  }
}

export default App;
