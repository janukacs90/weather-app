export interface IGeo {
  cityList: ICity[];
  searchCity: string;
  loading: boolean;
  error: string;
}

export interface ICity {
  name: string;
  lat: number;
  lon: number;
  country: string;
}
