import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <input type="text" value="search" className="searchInput" />
      </div>
    )
  }
}

export default Header;
