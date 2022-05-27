import {GEO_DATA_LOAD, CITY_NAME_CHANGE} from '../reducers/geo.reducers';

export function cityNameChange(cityName: string) {
  return {
    type: CITY_NAME_CHANGE,
    payload: cityName,
  };
}

export function loadGeo(cityName: string) {
  return {
    type: GEO_DATA_LOAD,
    payload: cityName,
  };
}
