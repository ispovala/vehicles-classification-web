import VehiclesTable from "./pages/vehicles";
import Layout from "./shared/components/layout";

function App() {
  return (
    <Layout>
      <div className="my-auto">
        <VehiclesTable />
      </div>
    </Layout>
  );
}

export default App;
