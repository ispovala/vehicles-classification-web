import { useState } from "react";
import clsx from "clsx";
import { Dialog } from "@headlessui/react";
import { PencilAltIcon, TrashIcon } from "@heroicons/react/solid";
import { Button } from "./button";

const Modal: React.FC<{
  children: React.ReactNode;
  usage: "create" | "edit" | "delete";
  onSubmit?: (id: number) => Promise<void>;
  id?: number;
  formError?: boolean;
}> = ({ children, usage, onSubmit, id, formError }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        className="ml-2 bg-green-500 hover:bg-green-400 h-10 my-auto"
        onClick={() => setIsOpen(true)}
      >
        Test
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
            {usage === "create"
              ? "New Vehicle"
              : usage === "edit"
                ? "Edit Vehicle"
                : "Delete Vehicle"}
          </Dialog.Title>
          <Dialog.Description className="text-xl m-2">
            {usage === "create"
              ? "New a new"
              : usage === "edit"
                ? "Edit a"
                : "Delete a"}{" "}
            vehicle
          </Dialog.Description>
          <div className="mx-3">{children}</div>
          <button
            className={clsx(
              "mx-2 mb-4 w-full inline-flex justify-center rounded-md  shadow-sm px-4 py-2 text-base font-medium text-gray-700 hover:outline-double outline-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm",
              usage === "delete"
                ? "bg-red-400 hover:bg-red-300"
                : "bg-green-500 hover:bg-green-400"
            )}
            form="vehicle-form"
            type="submit"
            tabIndex={0}
            onClick={async () =>
              formError
                ? console.log({ formError })
                : typeof onSubmit !== "undefined" && id
                  ? await onSubmit(id) // on Delete
                  : setTimeout(() => setIsOpen(false), 1000)
            }
          >
            {usage === "delete" ? "Delete" : "Submit"}
          </button>
          <Button
            className="mx-2 mb-4 w-full inline-flex justify-center rounded-md  shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:outline-double outline-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            onClick={() => setIsOpen(false)}
          >
            Cancel
          </Button>
        </div>
      </Dialog>
    </>
  );
};

export default Modal;
