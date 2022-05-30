import {Config as RNConfig} from 'react-native-config';

interface iConfig {
  API_HOURLY_FORECAST_URL: string;
  API_GEO_URL: string;
  API_KEY: string;
}

export const configuration: iConfig = {
  API_HOURLY_FORECAST_URL: RNConfig.API_HOURLY_FORECAST_URL,
  API_GEO_URL: RNConfig.API_GEO_URL,
  API_KEY: RNConfig.API_KEY,
};

export enum AlertTypes {
  default = 'default',
  success = 'success',
  info = 'info',
  warning = 'warning',
  danger = 'danger',
}
