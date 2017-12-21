import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { setLocation, setData, setPhotos} from '../../actions/actions';
import { connect } from 'react-redux';

class Results extends Component {

  /* builds rows as displays which match results from correct gps coords */
  buildRows = () => {
    return (
      <div>
      {this.props.apiData.apiData.map(items => {
        return (
            <div className="row">
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

    const rows = this.buildRows();
    console.log('this is photos ' + JSON.stringify(this.props.photos.photos));
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
export default connect(mapStateToProps, dispatchToProps)(Results);
