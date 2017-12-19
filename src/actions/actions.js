import { SET_LOCATION, SET_API_DATA } from '../constants/constants';

export const setLocation = (location) => ({
  type: SET_LOCATION,
  payload: location
})

export const setData = (data) => ({
  type: SET_API_DATA,
  payload: data
})
