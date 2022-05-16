import { useEffect, useState } from "react";
import Layout from "./shared/components/layout";
import VehiclesTable from "./pages/vehicles";
import { URL_BASE } from "./shared/constants/url";
import { Column } from "./shared/interfaces/columns.interface";
import { Vehicle } from "./shared/interfaces/vehicles.interface";

function App() {
  const [vehicles, setVehicles] = useState<Array<Vehicle> | undefined>(
    undefined
  );
  useEffect(() => {
    // Fetch vehicles
    async function fetchVehicles() {
      const response = await fetch(`${URL_BASE}/vehicles`);
      const data = await response.json();
      setVehicles(data.data);
      console.log({ data });
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
