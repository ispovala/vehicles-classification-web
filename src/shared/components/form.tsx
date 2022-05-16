import React from "react";
import { Vehicle } from "../interfaces/vehicles.interface";

const Form: React.FC<{
  vehicle: Vehicle | undefined;
  setVehicle: (value: Vehicle) => void;
}> = ({ vehicle, setVehicle }) => {
  return (
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
                onChange={(e) => {
                  e.preventDefault();
                  const vehicleCopy: Vehicle = { ...vehicle } as typeof vehicle;
                  // @ts-ignore
                  vehicleCopy[field] = e.target.value; // todo: improve this
                  setVehicle(vehicleCopy);
                }}
                className="appearance-none bg-gray-50 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            )}
          </label>
        </div>
      ))}
    </form>
  );
};

export default Form;
