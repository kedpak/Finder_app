import { SET_LOCATION, SET_API_DATA, SET_PHOTOS, MAP_COORD, TOGGLE_POPUP } from '../constants/constants';
import initialState from '../initialState';

export default function(state = initialState, action) {
  let newState = Object.assign({}, state);

  switch (action.type) {
    case SET_LOCATION:
        newState['location'] = action.payload;
        return newState;
    case SET_API_DATA:
        newState['apiData'] = action.payload;
        return newState;
    case SET_PHOTOS:
        /* condition prevents multiple photos from being pushed into same container */
        if (newState['photos'].indexOf(action.payload) === -1){
          newState['photos'].push(action.payload);
          return newState;
        }
        return newState;
    case MAP_COORD:
      newState['coord'] = action.payload;
      return newState;
    case TOGGLE_POPUP:
      newState['togglePopUp'] = !newState['togglePopUp'];
      return newState;
    default:
      return state;
  }
}
