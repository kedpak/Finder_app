import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import initialState from '../../initialState';
import { setLocation } from '../../actions/actions';
import { connect } from 'react-redux';
let axios = require('axios');

class Results extends Component {

  returnData = (location) => {
        axios.get('https://api.foursquare.com/v2/venues/search', {
    	    params: {
      		client_id: 'CWZSTYEOSJ0LVZXRMQNMYKD5GOG2FY0YWU2ZVW4CNS0A42PJ',
      		client_secret: '5QGV304KK1T5OYOF1CBKMEK0FF2QDELDCVFGVAVEBZUZ1ADW',
      		ll: '40.7243,-74.0018',
      		query: 'mexican',
      		v: '20170801',
      		limit: 1
    	    }
    	}).then(res => {
    	    console.log(res.data.response.venues[0]);
          res.data.response.venues.map(items => {
            <div>{items}</div>
          })
    	    }).catch(error => {
    		    console.log(error);
    		});
  }

  render() {
    console.log(this.props.location);
    return (
      <div></div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    location: state.location
  }
}

const dispatchToProps = (dispatch) => {
  return {
      setLocation: (location) => dispatch(setLocation(location))
  }
}
export default connect(mapStateToProps, dispatchToProps)(Results);
