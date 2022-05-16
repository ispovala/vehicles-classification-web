import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Vehicle } from "../interfaces/vehicles.interface";

const getValue = (value: any, accessor: string): string | number => {
  const vehicle = value as Vehicle;
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

type Inputs = {
  plate: string;
  model: string;
  capacity: string;
  type: string;
};

const Form: React.FC<{
  vehicle: Vehicle | undefined;
  setVehicle: (value: Vehicle) => void;
}> = ({ vehicle, setVehicle }) => {
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  console.log(watch("plate"));
  return (
    <form
      className="pt-6 pb-8 mb-4 w-full items-center w-50"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="mb-4">
        <label className="block mr-auto text-sm font-bold mb-2">
          Plate
          {vehicle && (
            <input
              type={"plate"}
              id={"plate"}
              placeholder={"plate"}
              value={getValue(vehicle, "plate")}
              {...register("plate")}
              className="appearance-none bg-gray-50 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          )}
        </label>
      </div>
      <div className="mb-4">
        <label className="block mr-auto text-sm font-bold mb-2">
          Model
          {vehicle && (
            <input
              type={"model"}
              id={"model"}
              placeholder={"model"}
              value={getValue(vehicle, "model")}
              {...register("model")}
              className="appearance-none bg-gray-50 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          )}
        </label>
      </div>
      <div className="mb-4">
        <label className="block mr-auto text-sm font-bold mb-2">
          Type
          {vehicle && (
            <input
              type={"type"}
              id={"type"}
              placeholder={"type"}
              value={getValue(vehicle, "type")}
              {...register("type")}
              className="appearance-none bg-gray-50 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          )}
        </label>
      </div>
      <div className="mb-4">
        <label className="block mr-auto text-sm font-bold mb-2">
          Capacity
          {vehicle && (
            <input
              type={"capacity"}
              id={"capacity"}
              placeholder={"capacity"}
              value={getValue(vehicle, "capacity")}
              {...register("capacity")}
              className="appearance-none bg-gray-50 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          )}
        </label>
      </div>
      <input type="submit" id="submit-form" className="sm:hidden" />
    </form>
  );
};

export default Form;
