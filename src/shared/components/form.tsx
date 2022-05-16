import React from "react";

const Form: React.FC<{}> = () => {
  const formRef = React.useRef<HTMLFormElement>(null);

  return (
    <form
      className="pt-6 pb-8 mb-4 w-full items-center w-50" 
      ref={formRef}
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
      <div className="mb-4">
        <label className="block mr-auto text-sm font-bold mb-2">
          Plate:
          <input
            type="plate"
            name="plate"
            id="plate"
            placeholder="plate"
            className="appearance-none bg-gray-50 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </label>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">
          Model:
          <input
            type="model"
            name="model"
            id="model"
            placeholder="model"
            className="appearance-none bg-gray-50 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </label>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">
          Type:
          <input
            type="type"
            name="type"
            id="type"
            placeholder="type"
            className="appearance-none bg-gray-50 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </label>
      </div>
      <div>
        <label className="block text-sm font-bold mb-2">
          Capacity:
          <input
            type="capacity"
            name="capacity"
            id="capacity"
            placeholder="capacity"
            className="appearance-none bg-gray-50 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </label>
      </div>
    </form>
  );
};

export default Form;
