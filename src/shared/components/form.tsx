import React from "react";
import { Vehicle } from "../interfaces/vehicles.interface";

const Form: React.FC<{ vehicle: Vehicle | undefined }> = ({ vehicle }) => {
  return (
    <form
      className="pt-6 pb-8 mb-4 w-full items-center w-50"
      onSubmit={(e: React.SyntheticEvent) => {
        e.preventDefault();
        const target = e.target as typeof e.target & {
          plate: { value: string };
          model: { value: string };
          type: { value: string };
          capacity: { value: string };
        };
        const plate = target.plate.value;
        const model = target.model.value;
        const type = target.model.value;
        const capacity = target.model.value;
      }}
    >
      {["plate", "model", "type", "capacity"].map((field) => (
        <div className="mb-4">
          <label className="block mr-auto text-sm font-bold mb-2">
            {field}
            <input
              type={field}
              name={field}
              id={field}
              placeholder={field}
              className="appearance-none bg-gray-50 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </label>
        </div>
      ))}
    </form>
  );
};

export default Form;
