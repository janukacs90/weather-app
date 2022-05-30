import {DAYS, MONTHS} from '../config/constant';
import {showMessage} from 'react-native-flash-message';
import {AlertTypes} from '../config/config';

const getDate = (timestamp: number): string => {
  const d = new Date(timestamp * 1000);
  const dayName = DAYS[d.getDay()];
  const monthName = MONTHS[d.getMonth()];

  const date = new Date(timestamp * 1000);
  return dayName + ',' + monthName + ' ' + date.getDate();
};

const appDisplayMessage = (type: AlertTypes, message: string) => {
  showMessage({
    type: type,
    message: message,
  });
};

export {getDate, appDisplayMessage};
