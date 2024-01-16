import React, { useState } from "react";
import api from "../shared/api/fetch";
import Modal from "../shared/components/modal";
import FileInput from "../shared/components/select";
import Loading from "../shared/components/loading";
import { VehicleType } from "../shared/types/vehicles.type";

const Vehicles: React.FC<{}> = () => {
  const [vehicleImage, setVehicleImage] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const [formError, setFormError] = useState(false);
  const [response, setResponse] = useState<VehicleType>(undefined);

  const handleError: (error: any) => void = (error) => {
    setFormError(true);
    alert(error);
  };

  const handleClose: () => void = () => {
    setVehicleImage(undefined);
    setResponse(undefined);
  };

  const handleSubmit: () => Promise<void> = async () => {
    setLoading(true);
    setFormError(false);
    const url = "predict";
    const method = "POST";
    let response: VehicleType | Error;
    try {
      response = await api(
        url,
        method,
        vehicleImage);
    } catch (error) {
      handleError(error);
    }
    setResponse(response as VehicleType);
    setLoading(false);
  }

  return (
    <div className="flex">
      {/* Select image */}
      <FileInput vehicleImage={vehicleImage} setVehicleImage={setVehicleImage} />
      {/* Modal create new vehicle form */}
      <Modal action={handleSubmit} isSelected={!!vehicleImage} onClose={handleClose} response={response} isError={formError}>
        <div>
          {loading ?
            <Loading loading={loading} />
            :
            formError ? <p className="text-red-500 font-bold">Unexpected error.</p> : <img src={`vehicles/${response}${Math.floor(Math.random() * 9) + 1}.png`} alt={response} />}
        </div>
      </Modal>
    </div>
  );
};

export default Vehicles;
