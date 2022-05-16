import { useEffect, useState } from "react";
import VehiclesTable from "./pages/vehicles";
import api from "./shared/api/fetch";
import Layout from "./shared/components/layout";
import { Column } from "./shared/interfaces/columns.interface";
import { Vehicle } from "./shared/interfaces/vehicles.interface";

const columns: Array<Column> = [
  {
    Header: "plate",
    accessor: "plate",
  },
  { Header: "model", accessor: "model" },
  { Header: "type", accessor: "type" },
  { Header: "capacity", accessor: "capacity" },
  { Header: "creationDate", accessor: "creationDate" },
];

function App() {
  const [vehicles, setVehicles] = useState<Array<Vehicle> | undefined>(
    undefined
  );
  const [selectedDriver, setSelectedDriver] = useState<string>();

  useEffect(() => {
    // Fetch vehicles
    async function fetchVehicles() {
      const url = selectedDriver
        ? `vehicles?driverId=${selectedDriver}`
        : "vehicles";
      setVehicles(await api<Vehicle[]>(url, "GET"));
    }
    fetchVehicles().catch(console.error);
  }, [selectedDriver]);

  return (
    <Layout>
      <div className="my-auto">
        {vehicles && columns && (
          <VehiclesTable
            setSelectedDriver={setSelectedDriver}
            data={vehicles}
            columns={columns}
            setVehicles={setVehicles}
          />
        )}
      </div>
    </Layout>
  );
}

export default App;
