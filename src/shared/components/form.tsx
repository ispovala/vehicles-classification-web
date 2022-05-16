import React, { useMemo } from "react";
import { Vehicle } from "../interfaces/vehicles.interface";

const getValue = (value: any, accessor: string): string | number => {
  const vehicle = value as Vehicle;
  console.log({ vehicle });
  switch (accessor) {
    case "plate":
      return vehicle.plate;
    case "model":
      return vehicle.model;
    case "capacity":
      return vehicle.capacity;
    case "type":
      return vehicle.type;
    default:
      return "";
  }
};

const Form: React.FC<{
  vehicle: Vehicle | undefined;
  setVehicle: (value: Vehicle) => void;
}> = ({ vehicle, setVehicle }) => {
  return useMemo(() => (
    <form className="pt-6 pb-8 mb-4 w-full items-center w-50">
      {["plate", "model", "type", "capacity"].map((field) => (
        <div className="mb-4">
          <label className="block mr-auto text-sm font-bold mb-2">
            {field}
            {vehicle && (
              <input
                type={field}
                name={field}
                id={field}
                placeholder={field}
                value={getValue(vehicle, field)}
                onChange={(e) => {
                  e.preventDefault();
                  console.log(e.target.value);
                  setVehicle({
                    ...vehicle,
                    [e.target.name]: e.target.value,
                  });
                }}
                className="appearance-none bg-gray-50 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            )}
          </label>
        </div>
      ))}
    </form>
  ), [vehicle, setVehicle]);
};

export default Form;
