import moment from 'moment';

const FORMAT_DATE = 'DD [de] MMMM, YYYY';
const FORMAT_MOTH = ' MMMM';

export const formatDate = (date: string) => {
  if (date) {
    return moment(date).format(FORMAT_DATE);
  }
  return '';
};

export const MothCurrent = () => {
  return moment().format(FORMAT_MOTH);
};
