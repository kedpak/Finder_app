import { SET_ADDRESS } from '../constants/constants';
import initialState from '../initialState';

export default function(state = initialState, action) {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case SET_ADDRESS:
        newState['address'] = action.payload;
        console.log('this is newstate address: ' + newState['address']);
        return newState
    default:
      return state;
  }
}
