import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Inputs } from "../types/inputs.interface";
import { Vehicle } from "../types/vehicles.interface";

const Form: React.FC<{
  vehicle: Vehicle | undefined;
  submitHandler: (data: Inputs) => Promise<void>;
}> = ({ vehicle, submitHandler }) => {
  const onSubmit: SubmitHandler<Inputs> = submitHandler;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  return (
    <form
      id="vehicle-form"
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
    </form>
  );
};

export default Form;
