import { Dialog } from "@headlessui/react";
import clsx from "clsx";
import { useState } from "react";
import { Button } from "./button";

const Modal: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        className="ml-2 bg-green-500 hover:bg-green-400"
        onClick={() => setIsOpen(!isOpen)}
      >
        New
      </Button>
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
            className="w-full mx-2 mb-4 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
            onClick={() => setIsOpen(false)}
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
