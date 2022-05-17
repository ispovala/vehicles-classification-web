import { useEffect, useState } from "react";
import VehiclesTable from "./pages/vehicles";
import api from "./shared/api/fetch";
import Layout from "./shared/components/layout";
import { Vehicle } from "./shared/types/vehicles.interface";

function App() {
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
    <Layout>
      <div className="my-auto">
        {vehicles && (
          <VehiclesTable
            setSelectedDriver={setSelectedDriver}
            data={vehicles}
            setVehicles={setVehicles}
            loading={loading}
          />
        )}
      </div>
    </Layout>
  );
}

export default App;
