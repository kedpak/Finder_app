import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import locationReducer from './reducers/locationReducer';


/* combines all reducers into one variable */
const reducers = combineReducers({
    location: locationReducer,
    apiData: locationReducer,
    photos: locationReducer,
    coord: locationReducer,
    togglePopUp: locationReducer
})

const store = createStore(
    reducers,
    applyMiddleware(thunk)
);

export default store;
