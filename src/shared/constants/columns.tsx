import moment from "moment";
import { Column } from "react-table";

const handleDate: (date: string) => string = (date: string): string => {
  return moment(date).format("DD/MM/YYYY");
};

export const columns: Array<Column> = [
  {
    Header: "Plate",
    accessor: "plate",
  },
  { Header: "Model", accessor: "model" },
  { Header: "Type", accessor: "type" },
  { Header: "Capacity", accessor: "capacity" },
  {
    Header: "Creation Date",
    accessor: (row: any): string => handleDate(row.creationDate),
  },
  {
    Header: "Options",
    Cell: (row: any): any => <p>Edit</p>,
  },
];
