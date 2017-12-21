import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import { setLocation, setData, setPhotos, setCoord, togglePopUp } from '../../actions/actions';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class MapResult extends Component {


  buildMap = () => {
    console.log(this.props.coord.coord.lat);
    return (
      <div className="popUpMap">
          <Map google={this.props.google} zoom={14}
            initialCenter={{
              lat: this.props.coord.coord.lat,
              lng: this.props.coord.coord.lng
            }}
          style={{width:'300px', height:'300px', position:'center'}}/>
      </div>
    )
  }

  render() {
    const map = this.buildMap();
    console.log(this.props.popUp.togglePopUp)
    return (
      <div>
        {this.props.popUp.togglePopUp ? this.buildMap() : null}
      </div>
    )

  }
}

const mapStateToProps = (state) => {
  return {
    location: state.location,
    apiData: state.apiData,
    photos: state.photos,
    coord: state.coord,
    popUp: state.togglePopUp
  }
}

const dispatchToProps = (dispatch) => {
  return {
      setLocation: (location) => dispatch(setLocation(location)),
      setData: (data) => dispatch(setData(data)),
      setPhotos: (photos) => dispatch(setPhotos(photos)),
      setCoord: (lnglat) => dispatch(setCoord(lnglat)),
      togglePopUp: () => dispatch(togglePopUp())
  }
}

const MapPopup = connect(mapStateToProps, dispatchToProps)(GoogleApiWrapper({
  apiKey: 'AIzaSyDhc1bxQCcF6ecfAwC1Pj-Fv4OW9IZ3xbI'
})(MapResult))

export default MapPopup;
