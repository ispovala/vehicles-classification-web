import React, { useEffect, useState } from "react";
import { useMemo } from "react";
import api from "../shared/api/fetch";
import Form from "../shared/components/form";
import Modal from "../shared/components/modal";
import ArrayObjectSelect from "../shared/components/select";
import Table from "../shared/components/table";
import { Inputs } from "../shared/types/inputs.interface";
import { Vehicle } from "../shared/types/vehicles.interface";

const Vehicles: React.FC<{}> = () => {
  const [vehicle, setVehicle] = useState<Vehicle>({} as Vehicle);

  const [vehicles, setVehicles] = useState<Array<Vehicle> | undefined>(
    undefined
  );
  const [selectedDriver, setSelectedDriver] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit: (data: Inputs) => Promise<void> = async (data) => {
    const url = vehicle.id ? `vehicles/${vehicle.id}` : "vehicles";
    const method = vehicle.id ? "PUT" : "POST";
    const response = await api(url, method, JSON.stringify(data));
    if (response) {
      setLoading(true);
      const vehicles = await api<Vehicle[]>("vehicles", "GET");
      setVehicles(vehicles);
      setLoading(false);
    }
  };

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
      <pre>{JSON.stringify(vehicle, null, 2)}</pre>
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
          <Form vehicle={vehicle} submitHandler={handleSubmit} />
        </Modal>
      </div>
      {/* React table */}
      <Table
        data={vehicles || ([] as Vehicle[])}
        setVehicle={setVehicle}
        setVehicles={setVehicles}
        loading={loading}
        submitHandler={handleSubmit}
      />
    </>
  );
};

export default Vehicles;
