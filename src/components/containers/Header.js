import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import initialState from '../../initialState';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { setLocation } from '../../actions/actions';
import { connect } from 'react-redux';

class Header extends Component {
  constructor() {
    super();
    this.state = initialState;
    this.onChange = (address) => this.setState({address});
    }


  handleFormSubmit = () => {
    geocodeByAddress(this.state.address)
      .then(results => getLatLng(results[0]))
      .then(latLng => this.props.setLocation(latLng))
      .catch(error => console.error('Error', error))
  }

  render() {
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange
    }
    console.log(this.state.address);
    return (
      <div className="Header">
        <PlacesAutocomplete className="autos" inputProps={inputProps}/>
        <button onClick={this.handleFormSubmit}>Submit</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    location: state.location
  }
}

const dispatchToProps = (dispatch) => {
  return {
    setLocation: (location) => dispatch(setLocation(location))
  }
}

export default connect(mapStateToProps, dispatchToProps)(Header);
