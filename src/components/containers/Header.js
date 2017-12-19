import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import initialState from '../../initialState';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { setLocation, setData } from '../../actions/actions';
import { connect } from 'react-redux';
import axios from 'axios';

class Header extends Component {
  constructor() {
    super();
    this.state = initialState;
    this.onChange = (address) => this.setState({address});
    }

  returnData = () => {
          axios.get('https://api.foursquare.com/v2/venues/search', {
      	    params: {
        		client_id: 'C5SY14K1DMRYWST2044VUOJBHCKTWSA3QRES33ULS5FXNK0Q',
        		client_secret: 'I3YICX4JFKBMUHGTBLVA0YMPQHXN02VCYYJC2OTRFP5TFBRN',
        		ll: '40.7243,-74.0018',
        		query: 'mexican',
        		v: '20170801',
        		limit: 200
      	    }
      	}).then(res => {
      	    console.log(res.data.response.venues);
            this.props.setData(res.data.response.venues);
          }).catch(error => {
      		    console.log(error);
      		})
  }

  handleFormSubmit = () => {
    geocodeByAddress(this.state.address)
      .then(results => getLatLng(results[0]))
      .then(latLng => this.props.setLocation(latLng))
      .catch(error => console.error('Error', error))
    this.returnData();
  }

  render() {
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange
    }
    console.log(this.props.location);
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
    location: state.location,
    apiData: state.apiData
  }
}

const dispatchToProps = (dispatch) => {
  return {
    setLocation: (location) => dispatch(setLocation(location)),
    setData: (data) => dispatch(setData(data))
  }
}

export default connect(mapStateToProps, dispatchToProps)(Header);
