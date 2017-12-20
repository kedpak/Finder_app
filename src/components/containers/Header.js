import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import initialState from '../../initialState';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { setLocation, setData } from '../../actions/actions';
import { connect } from 'react-redux';
import axios from 'axios';
import store from '../../store';

class Header extends Component {
  constructor() {
    super();
    this.state = initialState;
    this.onChange = (address) => this.setState({address});
    }

  /* returns the data grabbed from api and sets coords/type */
  returnData = (location) => {
          const lat = location.lat;
          const lng = location.lng;
          axios.get('https://api.foursquare.com/v2/venues/search', {
      	    params: {
        		client_id: 'C5SY14K1DMRYWST2044VUOJBHCKTWSA3QRES33ULS5FXNK0Q',
        		client_secret: 'I3YICX4JFKBMUHGTBLVA0YMPQHXN02VCYYJC2OTRFP5TFBRN',
        		ll: lat + ',' + lng,
        		query: 'mexican',
        		v: '20170801',
        		limit: 200
      	    }
      	}).then(res => {
            console.log('venue ' + res.data.response.venues.length)
            this.props.setData(res.data.response.venues);
          }).catch(error => {
      		    console.log(error);
      		})
  }

  /* handles submit button click, finds geocode coords from auto fill and sets it to prop.location */
  handleFormSubmit = () => {
    geocodeByAddress(this.state.address)
      .then(results => getLatLng(results[0]))
      .then(latLng => this.props.setLocation(latLng))
      .then(res => this.returnData(this.props.location.location))
      .catch(error => console.error('Error', error))
    /* reset api data list back to empty for new search */
    this.props.apiData.apiData = [];
  }

  render() {
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange
    }
    return (
      <div className="Header">
        <PlacesAutocomplete className="autos" inputProps={inputProps}/>
        <button onClick={this.handleFormSubmit} className="button">Submit</button>
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
