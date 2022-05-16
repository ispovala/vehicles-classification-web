import moment from "moment";

export const handleDate: (date: string) => string = (date: string): string => {
  return moment(date).format("DD/MM/YYYY");
};
