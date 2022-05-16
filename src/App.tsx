import { useEffect, useState } from "react";
import Layout from "./components/layout";
import VehiclesTable from "./pages/vehicles";
import { URL_BASE } from "./shared/constants/url";
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
      console.log(data);
    }
    fetchVehicles().catch(console.error);
  }, []);
  return (
    <Layout>
      <div className="my-auto">
        {vehicles && <VehiclesTable data={vehicles} />}
      </div>
    </Layout>
  );
}

export default App;
