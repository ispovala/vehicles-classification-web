import React, { useState } from "react";
import api from "../shared/api/fetch";
import Modal from "../shared/components/modal";
import FileInput from "../shared/components/select";
import { Inputs } from "../shared/types/inputs.interface";
import Loading from "../shared/components/loading";

const Vehicles: React.FC<{}> = () => {
  const [vehicleImage, setVehicleImage] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const [formError, setFormError] = useState(false);
  const [response, setResponse] = useState<string>("Auto | Moto | SUV");

  const handleError: (error: any) => void = (error) => {
    console.log(error);
    setFormError(true);
  };

  const handleClose: () => void = () => {
    setVehicleImage(undefined);
    setResponse("Auto | Moto | SUV");
    setFormError(false);
  };

  const handleSubmit: () => Promise<void> = async () => {
    setLoading(true);
    setFormError(false);
    const url = "vehicles";
    const method = "POST";
    const response = await api(
      url,
      method,
      vehicleImage);
    if (response instanceof Error) {
      handleError(response);
    }
    if (typeof response === "string") { setResponse(response); }
    setLoading(false);
  }

  return (
    <div className="flex">
      {/* Select image */}
      <FileInput vehicleImage={vehicleImage} setVehicleImage={setVehicleImage} />
      {/* Modal create new vehicle form */}
      <Modal action={handleSubmit} isSelected={!!vehicleImage} onClose={handleClose}>
        <div>
          <Loading loading={loading} />
          <h3 className="text-2xl font-semibold text-green-500 py-6">{response}</h3>
        </div>
      </Modal>
    </div>
  );
};

export default Vehicles;
