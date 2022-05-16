import { useEffect, useState } from "react";
import VehiclesTable from "./pages/vehicles";
import api from "./shared/api/fetch";
import Layout from "./shared/components/layout";
import { Column } from "./shared/interfaces/columns.interface";
import { Vehicle } from "./shared/interfaces/vehicles.interface";

function App() {
  const [vehicles, setVehicles] = useState<Array<Vehicle> | undefined>(
    undefined
  );
  useEffect(() => {
    // Fetch vehicles
    async function fetchVehicles() {
      setVehicles(await api<Vehicle[]>("vehicles"));
    }
    fetchVehicles().catch(console.error);
  }, []);

  let columns: Array<Column> = [
    {
      Header: "plate",
      accessor: "plate",
    },
    { Header: "model", accessor: "model" },
    { Header: "type", accessor: "type" },
    { Header: "capacity", accessor: "capacity" },
    { Header: "creationDate", accessor: "creationDate" },
  ];
  return (
    <Layout>
      <div className="my-auto">
        {vehicles && columns && (
          <VehiclesTable data={vehicles} columns={columns} />
        )}
      </div>
    </Layout>
  );
}

export default App;
