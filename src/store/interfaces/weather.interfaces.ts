export interface IWeatherItem {
  main: string;
  description: string;
  icon: string;
}
export interface IWeatherDetails {
  dt: number;
  weather: IWeatherItem[];
}
export interface IWeather {
  data: IWeatherDetails[];
  loading: boolean;
  error: string;
}
