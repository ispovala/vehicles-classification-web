import Vehicles from "./pages/vehicles";
import Layout from "./shared/components/layout";
import logo from "./img/logo.png";

function App() {
  return (
    <Layout>
      <img className="h-15 w-15 mx-auto my-auto rounded-3xl shadow-lg hover:shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" src={logo} alt="logo"></img>
      <div className="my-auto">
        <Vehicles />
      </div>
      <div className="p-2" />
    </Layout>
  );
}

export default App;
