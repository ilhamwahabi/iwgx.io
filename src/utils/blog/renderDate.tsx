import dayjs from 'dayjs';

export const renderDate = (date: string) => {
  return dayjs(date).format('D MMMM YYYY');
};
