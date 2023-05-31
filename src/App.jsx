import Header from "./components/Header";
import data from "../stays.json";
import Stays from "./components/Stays";
import Footer from "./components/Footer";
import { useState } from "react";
import Filter from "./components/Filter";
import "./app.css";

function App() {
  const [selected, setSelected] = useState(false);

  console.log(data);

  return (
    <>
      <div className="container relative mx-auto w-11/12">
        {selected && <Filter setSelected={setSelected} />}
        <Header setSelected={setSelected} />
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
