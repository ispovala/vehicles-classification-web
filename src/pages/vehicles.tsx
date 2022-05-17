import React, { useMemo, useState } from "react";
import api from "../shared/api/fetch";
import Form from "../shared/components/form";
import Modal from "../shared/components/modal";
import ArrayObjectSelect from "../shared/components/select";
import Table from "../shared/components/table";
import { Inputs } from "../shared/types/inputs.interface";
import { Vehicle } from "../shared/types/vehicles.interface";

const Vehicles: React.FC<{}> = () => {
  const [vehicles, setVehicles] = useState<Array<Vehicle> | undefined>(
    undefined
  );
  const [selectedDriver, setSelectedDriver] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);

  const handleDelete: (id: number) => Promise<void> = async (id) => {
    const response = await api(`vehicles/${id}`, "DELETE");
    if (response) {
      setLoading(true);
      const vehicles = await api<Vehicle[]>("vehicles", "GET");
      setVehicles(vehicles);
      setLoading(false);
    }
  };

  const handleSubmit: (data: Inputs) => Promise<void> = async (data) => {
    const url = data.id ? `vehicles/${data.id}` : "vehicles";
    const method = data.id ? "PUT" : "POST";
    const response = await api(url, method, JSON.stringify(data));
    if (response) {
      setLoading(true);
      const vehicles = await api<Vehicle[]>("vehicles", "GET");
      setVehicles(vehicles);
      setLoading(false);
    }
  };

  useMemo(() => {
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
        <Modal usage="create">
          <Form submitHandler={handleSubmit} />
        </Modal>
      </div>
      {/* React table */}
      <Table
        data={vehicles || ([] as Vehicle[])}
        loading={loading}
        submitHandler={handleSubmit}
        deleteHandler={handleDelete}
      />
    </>
  );
};

export default Vehicles;
