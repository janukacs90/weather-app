import {call, put, takeLatest} from 'redux-saga/effects';
import {configuration} from '../../config/config';
import {GET} from '../../helpers/httpClient';
import {WEATHER_DATA_LOAD, WEATHER_FETCH_SUCCEEDED} from '../reducers';

export interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}

function* getWeatherData(action: any) {
  try {
    const data: ResponseGenerator = yield call(
      GET,
      configuration.API_GEO_URL +
        '?q=' +
        action.payload.cityName +
        '&limit=1&appid=' +
        configuration.API_KEY,
    );
    yield put({type: WEATHER_FETCH_SUCCEEDED, payload: data});
  } catch (error) {}
}

export function* watchGetWeatherData() {
  yield takeLatest(WEATHER_DATA_LOAD, getWeatherData);
}
