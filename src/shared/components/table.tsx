import React, { useMemo } from "react";
import { Column, usePagination, useTable } from "react-table";
import { Vehicle } from "../types/vehicles.interface";
import { handleDate } from "../utils/handleDate";
import Form from "./form";
import { Loading } from "./loading";
import Modal from "./modal";
import Pagination from "./pagination";

const Table: React.FC<{
  data: Array<Vehicle>;
  setVehicles: (value: Vehicle[]) => void;
  setVehicle: (value: Vehicle) => void;
  loading: boolean;
}> = ({ data, loading, setVehicle, setVehicles }) => {
  const columns: Array<Column> = useMemo(
    () => [
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
        accessor: (row: any): Vehicle => row,
        Cell: ({ value }): any => (
          <Modal
            usage="edit"
            vehicle={value}
            setVehicles={setVehicles}
            setVehicle={setVehicle}
          >
            <Form vehicle={value} setVehicle={setVehicle} />
          </Modal>
        ),
      },
    ],
    [setVehicle, setVehicles]
  );

  const tableProps = useTable({ columns, data }, usePagination);
  const { getTableProps, getTableBodyProps, headerGroups, page, prepareRow } =
    tableProps;

  return (
    <>
      <div className="mt-4 flex flex-col">
        <div className="-my-2 overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table
                {...getTableProps()}
                className="border-2 table-fixed min-w-full divide-y divide-gray-200"
              >
                <thead className="bg-gray-50">
                  {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map((column) => (
                        <th
                          {...column.getHeaderProps()}
                          className="group px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          <div className="flex items-center justify-between">
                            <span>{column.render("Header")}</span>
                          </div>
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody
                  {...getTableBodyProps()}
                  className="bg-white divide-y divide-gray-200"
                >
                  {page.map((row, i) => {
                    prepareRow(row);
                    return (
                      <tr
                        {...row.getRowProps()}
                        className="px-6 py-4 whitespace-nowrap"
                      >
                        {row.cells.map((cell) => {
                          return (
                            <td className="flex-wrap" {...cell.getCellProps()}>
                              {cell.render("Cell")}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Loading loading={loading} />
      <Pagination {...tableProps} />
    </>
  );
};

export default Table;
