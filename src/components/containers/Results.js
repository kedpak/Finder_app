import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import initialState from '../../initialState';
import { setLocation, setData } from '../../actions/actions';
import { connect } from 'react-redux';
let axios = require('axios');

class Results extends Component {

  render() {
    console.log(this.props.location);
    return (
      <div>

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
