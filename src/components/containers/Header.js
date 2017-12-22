import React, { Component } from 'react';
import initialState from '../../initialState';
import SelectQuery from '../presentation/selectyQuery';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { setLocation, setData, setPhotos, setCoord } from '../../actions/actions';
import { connect } from 'react-redux';
import axios from 'axios';


class Header extends Component {
  constructor() {
    super();
    this.state = initialState;
    this.onChange = (address) => this.setState({address});
    }

  /* changes type of place to find */
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
        		client_id: 'PAB20IBSWBGAPWCWI1RKOJDBI4RNZ3MYFEM4YFQILY4P30KF',
        		client_secret: 'H2HVASEVFAMDVULVQCWF3KZHJ1IOGT53MNVOTND5VKKQAKVZ',
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
          client_id: 'PAB20IBSWBGAPWCWI1RKOJDBI4RNZ3MYFEM4YFQILY4P30KF',
          client_secret: 'H2HVASEVFAMDVULVQCWF3KZHJ1IOGT53MNVOTND5VKKQAKVZ',
          v: '20170801',
          VENUE_ID: items.id,
          limit: 1,
          }
          }).then(res => {
            let obj = {
              id: items.id,
              photos: (res.data.response.photos.items[0] ?
                res.data.response.photos.items[0].prefix +
                '230x230' + res.data.response.photos.items[0].suffix :
                'http://w4divas.com/wp-content/themes/wp-lollipop/assets/images/no-image.jpg')
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
    this.setState({address: ''});
  }

  render() {
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange
    }
    return (
      <div className="Header">
        <div className="searchBar">
          <PlacesAutocomplete className="autos" inputProps={inputProps} default="search"/>
          <button onClick={this.handleFormSubmit} className="button">Submit</button>
          <SelectQuery state={this.state.query} option={this.changeOption} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    location: state.location,
    apiData: state.apiData,
    photos: state.photos,
    coord: state.coord
  }
}

const dispatchToProps = (dispatch) => {
  return {
    setLocation: (location) => dispatch(setLocation(location)),
    setData: (data) => dispatch(setData(data)),
    setPhotos: (photos) => dispatch(setPhotos(photos)),
    setCoord: (lnglat) => dispatch(setCoord(lnglat))
  }
}

export default connect(mapStateToProps, dispatchToProps)(Header);
