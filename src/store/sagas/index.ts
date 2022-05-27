export * from './weather.sagas';
import {all, fork} from 'redux-saga/effects';
import {watchGetCityData} from './geo.sagas';
import {watchGetWeatherData} from './weather.sagas';

export function* rootSaga() {
  yield all([fork(watchGetWeatherData)]);
  yield all([fork(watchGetCityData)]);
}
