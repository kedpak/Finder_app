import React, { Component } from 'react';
import { setLocation, setData, setPhotos, setCoord, togglePopUp } from '../../actions/actions';
import { connect } from 'react-redux';

class Results extends Component {

  click = () => {
    this.props.togglePopUp();
  }

  handleNoResult = () => {
      return (<div className="noResult"> nodata </div>)
  }
  /* builds rows as displays which match results from correct gps coords */
  buildRows = (click) => {
    const altImg = 'http://w4divas.com/wp-content/themes/wp-lollipop/assets/images/no-image.jpg';
    return (
      <div>
      {this.props.apiData.apiData.length < 1 &&
        this.props.location.location !== '' ? <div className="noResult"> SORRY No Results </div> :
      <div>
      {this.props.apiData.apiData.map(items => {
        return (
            <div className="row" onClick={(event) => {this.props.setCoord(items.location); this.props.togglePopUp();}} >
              <div className="rowName" key={items.name}>{items.name}</div>
              <div className="rowPhone" key={items.contact.phone}>{items.contact.phone}</div>
              <div className="rowAddress" key={items.location.formattedAddress[0]}>{items.location.formattedAddress}</div>
              {this.props.photos.photos.map(item => {
                if (item.id === items.id) {
                  return (<img src={item.photos} className="pic" alt={altImg}/>)
                }
                return null;
              })}
            </div>
          )
      })}
      </div>
    }
    </div>
    )
  }
  render() {
    const { click } = this.props;
    const rows = this.buildRows(click);
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
