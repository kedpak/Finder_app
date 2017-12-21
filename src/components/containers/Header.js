import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import initialState from '../../initialState';
import SelectQuery from '../presentation/selectyQuery';
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


    changeOption = (state) => {
      this.setState({
        query: state
      })
    }
  /* returns the data grabbed from api and sets coords/type */
  returnData = (location, query) => {
          const lat = location.lat;
          const lng = location.lng;
          console.log(query)
          axios.get('https://api.foursquare.com/v2/venues/search', {
      	    params: {
        		client_id: 'YG4PLISZKCEY4BGBC42XNPKXPC3JJ0KXCPZ0WMTSPSI2DWFT',
        		client_secret: 'VQK3RSPV4V2UM4HJOCHL2XRMUGOQYACBDJ5BIEBC210W2FV4',
        		ll: lat + ',' + lng,
        		query: query,
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
          client_id: 'YG4PLISZKCEY4BGBC42XNPKXPC3JJ0KXCPZ0WMTSPSI2DWFT',
          client_secret: 'VQK3RSPV4V2UM4HJOCHL2XRMUGOQYACBDJ5BIEBC210W2FV4',
          v: '20170801',
          VENUE_ID: items.id,
          limit: 1,
          }
        }).then(res => {
            let obj = {
              id: items.id,
              photos: (res.data.response.photos.items[0] ?
                res.data.response.photos.items[0].prefix +
                  '300x300' + res.data.response.photos.items[0].suffix :
                'http://w4divas.com/wp-content/themes/wp-lollipop/assets/images/no-image.jpg  ')
              }
              this.props.setPhotos(obj);
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
      .then(res => {this.returnData(this.props.location.location, JSON.stringify(this.state.query.label))})
      .catch(error => console.error('Error', error))
    /* reset api data list back to empty for new search */
    this.props.apiData.apiData = [];
  }

  render() {
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange
    }
    console.log(this.state.query.label)
    return (
      <div className="Header">
        <PlacesAutocomplete className="autos" inputProps={inputProps}/>
        <button onClick={this.handleFormSubmit} className="button">Submit</button>
        <SelectQuery state={this.state.query} option={this.changeOption} />
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
