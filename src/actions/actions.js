import { SET_LOCATION, SET_API_DATA } from '../constants/constants';

/* actions for setting location of city selected, and setting api */
export const setLocation = (location) => ({
  type: SET_LOCATION,
  payload: location
})

export const setData = (data) => ({
  type: SET_API_DATA,
  payload: data
})
