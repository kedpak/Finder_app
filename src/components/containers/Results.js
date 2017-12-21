import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { setLocation, setData, setPhotos, setCoord, togglePopUp } from '../../actions/actions';
import { connect } from 'react-redux';

class Results extends Component {

  click = () => {
    this.props.togglePopUp();
  }
  /* builds rows as displays which match results from correct gps coords */
  buildRows = (click) => {
    return (
      <div>
      {this.props.apiData.apiData.map(items => {
        return (
            <div className="row" onClick={(event) => {this.props.setCoord(items.location); this.props.togglePopUp();}} >
              <div className="rowName" key={items}>{items.name}</div>
              <div className="rowPhone" key={items}>{items.contact.phone}</div>
              <div className="rowPhone" key={items}>{items.id}</div>
              {this.props.photos.photos.map(item => {
                if (item.id === items.id) {
                  return (<img src={item.photos}/>)
                }
              return
              })}
            </div>
          )
      })}
      </div>
    )
  }
  render() {
    const { click } = this.props;
    const rows = this.buildRows(click);
    console.log(this.props.coord);
    return (
      <div className="resultRow">
        {rows}
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
export default connect(mapStateToProps, dispatchToProps)(Results);
