import Vehicles from "./pages/vehicles";
import Layout from "./shared/components/layout";

function App() {
  return (
    <Layout>
      <div className="p-4" />
      <div className="my-auto">
        <Vehicles />
      </div>
      <div className="p-2" />
    </Layout>
  );
}

export default App;
