import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import initialState from '../../initialState';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { setLocation, setData, setPhotos } from '../../actions/actions';
import { connect } from 'react-redux';
import axios from 'axios';


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
        		client_id: 'RN3TFCPNS0XOCEGT2XEC4E5ZCHMFA2BPSIJ5UIKZT3ROTWOU',
        		client_secret: 'AHW0LBIZY2IAMIAGFFQ2FKZB44AVMW4UVF5QAJRY4N1S5OPN',
        		ll: lat + ',' + lng,
        		query: 'mexican',
        		v: '20170801',
        		limit: 200
      	    }
          }).then(res => {
            this.props.setData(res.data.response.venues);
            this.getPhoto()
          }).catch(error => {
      		    console.log(error);
      		})
  }
  /* grab photos from api and set them into store */
  getPhoto = () => {
      this.props.apiData.apiData.map(items => {
        let string = "https://api.foursquare.com/v2/venues/" + items.id + '/photos';
        axios.get(string , {
          params: {
          client_id: 'RN3TFCPNS0XOCEGT2XEC4E5ZCHMFA2BPSIJ5UIKZT3ROTWOU',
          client_secret: 'AHW0LBIZY2IAMIAGFFQ2FKZB44AVMW4UVF5QAJRY4N1S5OPN',
          v: '20170801',
          VENUE_ID: items.id,
          limit: 1,
          }
          }).then(res => {
              let obj = {
                id: items.id,
                photos: res.data.response.photos.items[0].prefix +
                  '300x300' + res.data.response.photos.items[0].suffix
                }
              console.log('this is obj  '+ JSON.stringify(obj));
              console.log(this.props.photos.photos)
              this.props.setPhotos(obj)
            }).catch(error => {
                console.log(error);
            })
      })
  }
  /* handles submit button click, finds geocode coords from auto fill and sets it to prop.location */
  handleFormSubmit = () => {
    geocodeByAddress(this.state.address)
      .then(results => getLatLng(results[0]))
      .then(latLng => this.props.setLocation(latLng))
      .then(res => {this.returnData(this.props.location.location)})
      .catch(error => console.error('Error', error))
    /* reset api data list back to empty for new search */
    this.props.apiData.apiData = [];
  }

  render() {
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange
    }
    console.log(this.props.apiData)
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
    apiData: state.apiData,
    photos: state.photos
  }
}

const dispatchToProps = (dispatch) => {
  return {
    setLocation: (location) => dispatch(setLocation(location)),
    setData: (data) => dispatch(setData(data)),
    setPhotos: (photos) => dispatch(setPhotos(photos))
  }
}

export default connect(mapStateToProps, dispatchToProps)(Header);
