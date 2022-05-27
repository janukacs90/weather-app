import {IWeather} from '../interfaces/weather.interfaces';

export const WEATHER_DATA_LOAD = 'WEATHER_DATA_LOAD';
export const LOADING = 'LOADING';

const initialState: IWeather = {
  data: [],
  loading: false,
};

export const weatherReducer = (state: IWeather = initialState, action: any) => {
  switch (action.type) {
    case WEATHER_DATA_LOAD:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
