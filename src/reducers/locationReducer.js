import { SET_LOCATION } from '../constants/constants';
import initialState from '../initialState';

export default function(state = initialState, action) {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case SET_LOCATION:
        console.log('SET_LOCATION: ' + JSON.stringify(action.payload));
        newState['location'] = action.payload
        console.log(newState);
        return newState;
    default:
      return state;

  }
}
