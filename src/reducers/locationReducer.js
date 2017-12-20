import { SET_LOCATION, SET_API_DATA } from '../constants/constants';
import initialState from '../initialState';

export default function(state = initialState, action) {
  let newState = Object.assign({}, state);

  switch (action.type) {
    case SET_LOCATION:
        console.log('SET_LOCATION: ' + JSON.stringify(action.payload));
        newState['location'] = action.payload
        return newState;
    case SET_API_DATA:
    
        newState['apiData'] = action.payload;

        return newState;
    default:
      return state;
  }
}
