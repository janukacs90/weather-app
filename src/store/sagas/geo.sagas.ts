import {call, put, takeLatest} from 'redux-saga/effects';
import {configuration} from '../../config/config';
import {GET} from '../../helpers/httpClient';
import {ICity} from '../interfaces/geo.interface';
import {GEO_DATA_LOAD, GEO_FETCH_ERROR, GEO_FETCH_SUCCEEDED} from '../reducers';

function* getCityData(action: any) {
  try {
    const data: ICity[] = yield call(
      GET,
      configuration.API_GEO_URL +
        '?q=' +
        action.payload +
        '&limit=10&appid=' +
        configuration.API_KEY,
    );
    yield put({
      type: GEO_FETCH_SUCCEEDED,
      payload: data,
    });
  } catch (error) {
    yield put({
      type: GEO_FETCH_ERROR,
      payload: error,
    });
  }
}

export function* watchGetCityData() {
  yield takeLatest(GEO_DATA_LOAD, getCityData);
}
