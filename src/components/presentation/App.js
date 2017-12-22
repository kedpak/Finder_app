import React, { Component } from 'react';
import Header from '../containers/Header';
import Results from '../containers/Results';
import MapPopup from '../containers/Map';
import './App.css';

class App extends Component {
  /* this is root component */
  render() {
    return (
      <div className="App">
        <Header />
        <Results click={this.onResultClick}/>
        <MapPopup />
      </div>
    );
  }
}

export default App;
