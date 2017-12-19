import { SET_LOCATION, SET_ADDRESS } from '../constants/constants';

export const setLocation = (location) => ({
  type: SET_LOCATION,
  payload: location
})

export const setAddress = (address) => ({
  type: SET_ADDRESS,
  payload: address
})
