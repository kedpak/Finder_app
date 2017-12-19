import {createStore, combineReducers} from "redux";
import locationReducer from './reducers/locationReducer';
import addressReducer from './reducers/addressReducer';

/* combines all reducers into one variable */
const reducers = combineReducers({
    location: locationReducer,
    address: addressReducer
})

const store = createStore(
    reducers
)

export default store;
