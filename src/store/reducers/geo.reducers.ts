import {IGeo} from '../interfaces/geo.interface';

export const GEO_DATA_LOAD = 'GEO_DATA_LOAD';
export const CITY_NAME_CHANGE = 'CITY_NAME_CHANGE';
export const GEO_FETCH_SUCCEEDED = 'GEO_FETCH_SUCCEEDED';
export const GEO_FETCH_ERROR = 'GEO_FETCH_ERROR';

const initialState: IGeo = {
  cityList: [],
  searchCity: '',
  loading: false,
  error: '',
};

export const geoReducer = (state: IGeo = initialState, action: any): IGeo => {
  switch (action.type) {
    case CITY_NAME_CHANGE:
      return {
        ...state,
        loading: false,
        error: '',
        searchCity: action.payload,
      };
    case GEO_DATA_LOAD:
      return {
        ...state,
        loading: true,
        error: '',
        searchCity: action.payload,
      };
    case GEO_FETCH_SUCCEEDED:
      return {
        ...state,
        loading: false,
        error: '',
        cityList: action.payload,
      };
    case GEO_FETCH_ERROR:
      return {
        ...state,
        loading: false,
        cityList: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
