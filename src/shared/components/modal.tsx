import { Dialog } from "@headlessui/react";
import clsx from "clsx";
import { useState } from "react";
import { Button } from "./button";

const Modal: React.FC<{
  children: React.ReactNode;
  isSelected: boolean;
  onClose: () => void;
  action: () => Promise<void>;
}> = ({ children, action, isSelected, onClose}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        className={`ml-2 bg-green-500 hover:bg-green-400 h-10 my-auto  ${isSelected ? "animate-bounce outline-emerald-400" : "opacity-50 cursor-not-allowed"}}`}
        onClick={() => setIsOpen(true)}
      >
        Test
      </Button>
      <Dialog
        open={isOpen}
        onClose={() => {
          setIsOpen(false);
          onClose();
        }}
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
            Test vehicle classificator
          </Dialog.Description>
          <div className="mx-3">{children}</div>
          <button
            className="mx-2 mb-4 w-full inline-flex justify-center rounded-md  shadow-sm px-4 py-2 text-base font-medium text-gray-700 hover:outline-double outline-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm bg-green-500 hover:bg-green-400"
            onClick={async () =>
              await action()
            }
          >
            Submit
          </button>
          <Button
            className="mx-2 mb-4 w-full inline-flex justify-center rounded-md  shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:outline-double outline-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            onClick={() => setIsOpen(false)}
          >
            Close
          </Button>
        </div>
      </Dialog>
    </>
  );
};

export default Modal;
