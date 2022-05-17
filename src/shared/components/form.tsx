import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Vehicle } from "../types/vehicles.interface";

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
              {...register("plate")}
              defaultValue={vehicle.plate}
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
              {...register("model")}
              defaultValue={vehicle.model}
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
              {...register("type")}
              defaultValue={vehicle.type}
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
              defaultValue={vehicle.capacity}
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
