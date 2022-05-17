import React, { useState } from "react";
import Form from "../shared/components/form";
import Modal from "../shared/components/modal";
import ArrayObjectSelect from "../shared/components/select";
import Table from "../shared/components/table";
import { Vehicle } from "../shared/types/vehicles.interface";

const VehiclesTable: React.FC<{
  data: Array<Vehicle>;
  setVehicles: (value: Vehicle[]) => void;
  setSelectedDriver: (value: string) => void;
  loading: boolean;
}> = ({ data, setSelectedDriver, setVehicles }) => {
  const [vehicle, setVehicle] = useState<Vehicle>({} as Vehicle);

  return (
    <>
      <div className="flex">
        {/* Async select */}
        <ArrayObjectSelect
          className="flex-auto"
          setSelectedDriver={setSelectedDriver}
        />
        {/* Modal create new vehicle form */}
        <Modal
          usage="create"
          vehicle={vehicle}
          setVehicles={setVehicles}
          setVehicle={setVehicle}
        >
          <Form vehicle={vehicle} setVehicle={setVehicle} />
        </Modal>
      </div>
      {/* React table */}
      <Table data={data} setVehicle={setVehicle} setVehicles={setVehicles} />
    </>
  );
};

export default VehiclesTable;
