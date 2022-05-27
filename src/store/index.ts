import {combineReducers} from 'redux';
import {weatherReducer} from './reducers';

export const appReducer = combineReducers({
  weather: weatherReducer,
});
