import {WEATHER_DATA_LOAD} from '../reducers';

export function loadData(cityName: string) {
  return {
    type: WEATHER_DATA_LOAD,
    payload: {cityName},
  };
}
