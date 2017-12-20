import { SET_API_DATA } from '../constants/constants';
import initialState from '../initialState';

export default function(state = initialState, action) {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case SET_API_DATA:
      console.log("this is paload" + action.payload[0].name)
      action.payload.map(items => {
        newState['apiData'].push(items)
      })
      console.log(newState);
      return newState;
    default:
      return state;
  }
}
