import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setLocation, setData, setPhotos, setCoord, togglePopUp } from '../../actions/actions';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';


/* component handles map displayed when result box is clicked */
class MapResult extends Component {

  closeMap = () => {
    this.props.togglePopUp();
  }
  /* sets up google map with cooresponding lat long coords */
  buildMap = () => {
    return (
      <div className="popUpMap">
          <Map google={this.props.google} zoom={14}
            initialCenter={{
              lat: this.props.coord.coord.lat,
              lng: this.props.coord.coord.lng
            }}
            style={{width:'300px', height:'300px', position:'relative', margin:'auto'}}>
            <Marker onClick={this.onMarkerClick}
                  name={'Current location'} />
                  <InfoWindow onClose={this.onInfoWindowClose}>
                  </InfoWindow>
                  <button className="mapButton" onClick={this.closeMap}> Close Floppydisk </button>
          </Map>
      </div>
    )}
  render() {
    return (
      <div className="mapRow">
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
