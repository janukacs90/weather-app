import {call, put, takeLatest} from 'redux-saga/effects';
import {configuration} from '../../config/config';
import {GET} from '../../helpers/httpClient';
import {
  WEATHER_DATA_LOAD,
  WEATHER_FETCH_ERROR,
  WEATHER_FETCH_SUCCEEDED,
} from '../reducers';

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
      configuration.API_HOURLY_FORECAST_URL +
        '?lat=' +
        action.payload.lat +
        '&lon=' +
        action.payload.lon +
        '&appid=' +
        configuration.API_KEY,
    );
    yield put({type: WEATHER_FETCH_SUCCEEDED, payload: data});
  } catch (error) {
    yield put({
      type: WEATHER_FETCH_ERROR,
      payload: error,
    });
  }
}

export function* watchGetWeatherData() {
  yield takeLatest(WEATHER_DATA_LOAD, getWeatherData);
}
