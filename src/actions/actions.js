import { SET_LOCATION, SET_API_DATA, SET_PHOTOS, MAP_COORD, TOGGLE_POPUP } from '../constants/constants';

/* actions for setting location of city selected, and setting api */
export const setLocation = (location) => ({
  type: SET_LOCATION,
  payload: location
})

export const setData = (data) => ({
  type: SET_API_DATA,
  payload: data
})

export const setPhotos = (photos) => ({
  type: SET_PHOTOS,
  payload: photos
})

export const setCoord = (lnglat) => ({
  type: MAP_COORD,
  payload: lnglat
})

export const togglePopUp = () => ({
  type: TOGGLE_POPUP
})
