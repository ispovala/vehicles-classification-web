import React, { ChangeEvent } from "react";

const FileInput: React.FC<{
}> = ({ }) => {
  return (
    <div className="flex flex-col p-4">
      <label htmlFor="vehicle_image">Vehicle image</label>
      <label htmlFor="vehicle_image" className="flex items-center">
        <div className="btn-style text-primary-light mr-3">Choose file</div>
        <p className="text-gray-400">{undefined === undefined ? 'No file chosen' : 'Name'}</p>
      </label>
      <input
        type="file"
        name="vehicle_image"
        id="vehicle_image"
        // onChange={({ currentTarget }: ChangeEvent<HTMLInputElement>) => {
        //   currentTarget.files && formik.setFieldValue('vehicle_image', currentTarget.files[0]);
        // }}
        className="hidden"
      />
    </div>
  );
};

export default FileInput;
