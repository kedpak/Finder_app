import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import locationReducer from './reducers/locationReducer';
import dataReducer from './reducers/dataReducer';

/* combines all reducers into one variable */
const reducers = combineReducers({
    location: locationReducer,
    apiData: dataReducer
})

const store = createStore(
    reducers,
    applyMiddleware(thunk)
);

export default store;
