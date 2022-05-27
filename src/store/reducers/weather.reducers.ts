import {IWeather} from '../interfaces/weather.interfaces';

export const WEATHER_DATA_LOAD = 'WEATHER_DATA_LOAD';
export const WEATHER_FETCH_SUCCEEDED = 'WEATHER_FETCH_SUCCEEDED';
export const WEATHER_FETCH_ERROR = 'WEATHER_FETCH_ERROR';

const initialState: IWeather = {
  data: [],
  loading: false,
  error: '',
};

export const weatherReducer = (
  state: IWeather = initialState,
  action: any,
): IWeather => {
  switch (action.type) {
    case WEATHER_FETCH_SUCCEEDED:
      return {
        ...state,
        loading: false,
        data: action.payload.list,
        error: '',
      };
    case WEATHER_FETCH_ERROR:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
