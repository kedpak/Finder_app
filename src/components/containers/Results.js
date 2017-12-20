import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import initialState from '../../initialState';
import { setLocation, setData } from '../../actions/actions';
import { connect } from 'react-redux';
let axios = require('axios');

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
            </div>
          )
      })}
      </div>
    )
  }
  render() {

    const rows = this.buildRows();
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
    apiData: state.apiData
  }
}

const dispatchToProps = (dispatch) => {
  return {
      setLocation: (location) => dispatch(setLocation(location)),
      setData: (data) => dispatch(setData(data))
  }
}
export default connect(mapStateToProps, dispatchToProps)(Results);
