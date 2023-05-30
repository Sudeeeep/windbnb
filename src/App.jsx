import Header from "./components/Header";
import data from "../stays.json";
import Stays from "./components/Stays";
import Footer from "./components/Footer";

function App() {
  console.log(data);
  return (
    <>
      <div className="container mx-auto w-11/12">
        <Header />
        <div className="flex justify-between mt-10 mb-5">
          <h3 className="font-bold text-lg text-gray-800">Stays in Finland</h3>
          <p>12+ stays</p>
        </div>
        <Stays data={data} />
        <Footer />
      </div>
    </>
  );
}

export default App;
