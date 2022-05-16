import { Dialog } from "@headlessui/react";
import clsx from "clsx";
import { useEffect, useState } from "react";
import api from "../api/fetch";
import { Vehicle } from "../interfaces/vehicles.interface";
import { Button } from "./button";

const handleSubmit: (
  vehicle: Vehicle,
  setVehicles: (value: Vehicle[]) => void,
  setIsOpen: (value: boolean) => void
) => void = async (vehicle, setVehicles, setIsOpen) => {
  const url = vehicle.id ? `vehicles/${vehicle.id}` : "vehicles";
  const method = vehicle.id ? "PUT" : "POST";
  const response = await api(url, method, JSON.stringify(vehicle)).catch(
    (error) => console.log(error)
  );
  if (response) {
    console.log(response);
  }
  const vehicles = await api<Vehicle[]>("vehicles", "GET");
  setVehicles(vehicles);
  setIsOpen(false);
};

const Modal: React.FC<{
  children: React.ReactNode;
  usage: "create" | "edit";
  vehicle: Vehicle;
  setVehicles: (value: Vehicle[]) => void;
  setVehicle: (value: Vehicle) => void;
}> = ({ children, usage, vehicle, setVehicles, setVehicle }) => {
  let [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setVehicle({} as Vehicle);
    }
  }, [isOpen, setVehicle]);

  return (
    <>
      {usage === "create" ? (
        <Button
          className="ml-2 bg-green-500 hover:bg-green-400"
          onClick={() => setIsOpen(!isOpen)}
        >
          New
        </Button>
      ) : (
        <Button
          className="ml-2 bg-green-500 hover:bg-green-400"
          onClick={() => {
            console.log({ vehicle });
            setVehicle(vehicle);
            setIsOpen(!isOpen);
          }}
        >
          Edit
        </Button>
      )}
      <Dialog
        open={isOpen}
        onClose={setIsOpen}
        as="div"
        className={clsx(
          "fixed inset-0 z-10 overflow-y-auto flex justify-center items-center",
          {
            "shadow-2xl": isOpen === true,
          }
        )}
      >
        <div className="flex flex-col bg-gray-600 rounded-md text-white w-96 py-8 px-4 text-center">
          <Dialog.Overlay />

          <Dialog.Title className="text-3xl font-semibold">
            New Vehicle
          </Dialog.Title>
          <Dialog.Description className="text-xl m-2">
            Create a new vehicle
          </Dialog.Description>
          <div className="mx-3">{children}</div>

          <button
            className="w-full mx-2 mb-4 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
            onClick={async () =>
              await handleSubmit(vehicle, setVehicles, setIsOpen)
            }
          >
            Submit
          </button>
          <button
            className="mx-2 mb-4 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            onClick={() => setIsOpen(false)}
          >
            Cancel
          </button>
        </div>
      </Dialog>
    </>
  );
};

export default Modal;
