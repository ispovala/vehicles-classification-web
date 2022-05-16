import React from "react";
import AsyncSelect from "react-select/async";
import api from "../api/fetch";
import { Driver } from "../interfaces/drivers.interface";
import { Option } from "../interfaces/option.interface";

const labelFormatter: (i: any) => Option = (i) => {
  return {
    label: `${i.firstName} ${i.lastName}`,
    value: i.id,
  };
};

const loadOptions = async (
  inputValue: string,
  callback: any
): Promise<Option[]> =>
  api<Driver[]>(`drivers?firstName=${inputValue}`).then((response) =>
    response.map((result) => labelFormatter(result))
  );

const ArrayObjectSelect: React.FC<{
  setSelectedDriver: (value: string) => void;
  className?: string;
}> = ({ setSelectedDriver, className }) => {
  return (
    <AsyncSelect
      className={`${className}`}
      onChange={(selectedDriver) =>
        selectedDriver && setSelectedDriver(selectedDriver.value)
      }
      cacheOptions
      loadOptions={loadOptions}
      defaultOptions
      placeholder={"Search for a driver"}
    />
  );
};

export default ArrayObjectSelect;
