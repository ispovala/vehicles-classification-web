import clsx from "clsx";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Inputs } from "../types/inputs.interface";
import { Vehicle } from "../types/vehicles.interface";

const Form: React.FC<{
  vehicle?: Vehicle;
  submitHandler: (data: Inputs) => Promise<void>;
  onError: (error: any) => void;
}> = ({ vehicle, submitHandler, onError }) => {
  const onSubmit: SubmitHandler<Inputs> = submitHandler;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const registerOptions = {
    plate: { required: "Plate is required" },
    model: { required: "Model is required" },
    type: { required: "Type is required" },
    capacity: { required: "Capacity is required" },
  };

  return (
    <form
      id="vehicle-form"
      className="pt-6 pb-8 mb-4 w-full items-center w-50"
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      <input
        id={"id"}
        placeholder={"id"}
        {...register("id")}
        defaultValue={vehicle?.id}
        className="hidden"
      />
      <div className="mb-4">
        <label className="block mr-auto text-sm font-bold mb-2">
          Plate
          <input
            id={"plate"}
            placeholder={"plate"}
            {...register("plate", registerOptions.plate)}
            defaultValue={vehicle?.plate}
            className="appearance-none bg-gray-50 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <div
            className={clsx(
              "text-red-400",
              !errors.plate ? "sm:hidden" : "sm:flex"
            )}
          >
            {errors?.plate?.message}
          </div>
        </label>
      </div>
      <div className="mb-4">
        <label className="block mr-auto text-sm font-bold mb-2">
          Model
          <input
            id={"model"}
            placeholder={"model"}
            {...register("model", registerOptions.model)}
            defaultValue={vehicle?.model}
            className="appearance-none bg-gray-50 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <div
            className={clsx(
              "text-red-400",
              !errors.model ? "sm:hidden" : "sm:flex"
            )}
          >
            {errors?.model?.message}
          </div>
        </label>
      </div>
      <div className="mb-4">
        <label className="block mr-auto text-sm font-bold mb-2">
          Type
          <input
            id={"type"}
            placeholder={"type"}
            {...register("type", registerOptions.type)}
            defaultValue={vehicle?.type}
            className="appearance-none bg-gray-50 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <div
            className={clsx(
              "text-red-400",
              !errors.type ? "sm:hidden" : "sm:flex"
            )}
          >
            {errors?.type?.message}
          </div>
        </label>
      </div>
      <div className="mb-4">
        <label className="block mr-auto text-sm font-bold mb-2">
          Capacity
          <input
            id={"capacity"}
            placeholder={"capacity"}
            defaultValue={vehicle?.capacity}
            {...register("capacity", registerOptions.capacity)}
            className="appearance-none bg-gray-50 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <div
            className={clsx(
              "text-red-400",
              !errors.capacity ? "sm:hidden" : "sm:flex"
            )}
          >
            {errors?.capacity?.message}
          </div>
        </label>
      </div>
    </form>
  );
};

export default Form;
