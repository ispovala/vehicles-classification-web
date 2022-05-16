import { Column } from "../interfaces/columns.interface";

export const columns: Array<Column> = [
  {
    Header: "Plate",
    accessor: "plate",
  },
  { Header: "Model", accessor: "model" },
  { Header: "Type", accessor: "type" },
  { Header: "Capacity", accessor: "capacity" },
  { Header: "Creation Date", accessor: "creationDate" },
  { Header: "Options", accessor: "lastUpdate" },
];
