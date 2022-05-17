import React, { useEffect, useState } from "react";
import api from "../shared/api/fetch";
import Form from "../shared/components/form";
import Modal from "../shared/components/modal";
import ArrayObjectSelect from "../shared/components/select";
import Table from "../shared/components/table";
import { Vehicle } from "../shared/types/vehicles.interface";

const VehiclesTable: React.FC<{}> = ({}) => {
  const [vehicle, setVehicle] = useState<Vehicle>({} as Vehicle);
  const [vehicles, setVehicles] = useState<Array<Vehicle> | undefined>(
    undefined
  );
  const [selectedDriver, setSelectedDriver] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    // Fetch vehicles
    async function fetchVehicles() {
      setLoading(true);
      const url = selectedDriver
        ? `vehicles?driverId=${selectedDriver}`
        : "vehicles";
      setVehicles(await api<Vehicle[]>(url, "GET"));
      setLoading(false);
    }
    fetchVehicles().catch(console.error);
  }, [selectedDriver]);

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
      <Table
        data={vehicles || ([] as Vehicle[])}
        setVehicle={setVehicle}
        setVehicles={setVehicles}
        loading={loading}
      />
    </>
  );
};

export default VehiclesTable;
