import {IGeo} from './geo.interface';
import {IWeather} from './weather.interfaces';

export interface IAppState {
  weather: IWeather;
  geo: IGeo;
}
