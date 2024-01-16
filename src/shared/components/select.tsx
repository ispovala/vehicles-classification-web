import React, { ChangeEvent } from "react";
import { handleImgToBase64 } from "../utils/handleImgToBase64";

const FileInput: React.FC<{
  vehicleImage: string | undefined;
  setVehicleImage: React.Dispatch<React.SetStateAction<string | undefined>>;
}> = ({ vehicleImage, setVehicleImage }) => {
  return (
    <div className="flex flex-col py-4">
      <label htmlFor="vehicle_image"></label>
      <label htmlFor="vehicle_image" className="flex items-center space-x-2">
        <div className="btn-style text-primary-light">Choose a file</div>
        <p className="text-gray-400">{vehicleImage === undefined ? 'No file chosen' : 'File chosen'}</p>
      </label>
      <input
        type="file"
        name="vehicle_image"
        id="vehicle_image"
        onChange={async (e: ChangeEvent<HTMLInputElement>) => {
          if (!e.target.files) return;
          const validImageTypes = ['image/jpeg', 'image/jpg', 'image/png'];
          if (!validImageTypes.includes(e.target.files[0].type)) return alert('Invalid file type');
          const base64Img = await handleImgToBase64(e.target.files[0]);
          setVehicleImage(base64Img);
        }}
        className="hidden"
        accept="image/*"
      />
    </div>
  );
};

export default FileInput;
