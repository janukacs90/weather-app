import {DAYS, MONTHS} from '../config/constant';

const getDate = (timestamp: number): string => {
  const d = new Date(timestamp * 1000);
  const dayName = DAYS[d.getDay()];
  const monthName = MONTHS[d.getMonth()];

  const date = new Date(timestamp * 1000);
  return dayName + ',' + monthName + ' ' + date.getDate();
};

export {getDate};
