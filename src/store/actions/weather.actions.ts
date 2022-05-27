import {WEATHER_DATA_LOAD} from '../reducers';

export function loadWeatherData(lat: number, lon: number) {
  return {
    type: WEATHER_DATA_LOAD,
    payload: {lat, lon},
  };
}
