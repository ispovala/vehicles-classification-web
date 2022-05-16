import React from "react";

const Form: React.FC<{}> = () => {
  const formRef = React.useRef<HTMLFormElement>(null);

  return (
    <form
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
      <div>
        <label>
          Plate:
          <input type="plate" name="plate" />
        </label>
      </div>
      <div>
        <label>
          Model:
          <input type="model" name="model" />
        </label>
      </div>
      <div>
        <label>
          Type:
          <input type="type" name="type" />
        </label>
      </div>
      <div>
        <label>
          Capacity:
          <input type="capacity" name="capacity" />
        </label>
      </div>
      <div>
        <input type="submit" value="Submit" />
      </div>
    </form>
  );
};

export default Form;
