import {combineReducers} from 'redux';
import {geoReducer, weatherReducer} from './reducers';

export const appReducer = combineReducers({
  weather: weatherReducer,
  geo: geoReducer,
});
