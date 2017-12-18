import {createStore, combineReducers} from "redux";
import locationReducer from './reducers/locationReducer';

/* combines all reducers into one variable */
const reducers = combineReducers({
    location: locationReducer
})


const store = createStore(
    reducers
)

export default store;
