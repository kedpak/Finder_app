import React, { Component } from 'react';
import Header from '../containers/Header';
import Results from '../containers/Results';
import MapPopup from '../containers/Map';
import './App.css';

class App extends Component {


  onResultClick = () => {
    console.log('yoooo')
      this.setState({
        togglePopUp: !this.state.togglePopUp
      })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Results click={this.onResultClick}/>
        <div>
        <MapPopup />
        </div>
      </div>
    );
  }
}

export default App;
