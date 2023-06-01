import Header from "./components/Header";
import data from "../stays.json";
import Stays from "./components/Stays";
import Footer from "./components/Footer";
import { useState } from "react";
import Filter from "./components/Filter";
import "./app.css";

function App() {
  const [selected, setSelected] = useState(false);
  const [locationVisibility, setLocationVisibility] = useState(true);
  const [guestsVisibility, setGuestsVisibility] = useState(false);
  const [location, setLocation] = useState("");
  const [guests, setGuests] = useState(0);
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);

  console.log(data);

  return (
    <>
      <div className="container min-h-screen relative mx-auto w-11/12 pb-10">
        {selected && (
          <Filter
            setSelected={setSelected}
            locationVisibility={locationVisibility}
            setLocationVisibility={setLocationVisibility}
            guestsVisibility={guestsVisibility}
            setGuestsVisibility={setGuestsVisibility}
            location={location}
            setLocation={setLocation}
            guests={guests}
            setGuests={setGuests}
            adults={adults}
            setAdults={setAdults}
            children={children} //eslint-disable-line
            setChildren={setChildren}
          />
        )}
        <Header setSelected={setSelected} />
        <Stays
          data={data}
          guests={guests}
          selected={selected}
          location={location}
        />
        <Footer />
      </div>
    </>
  );
}

export default App;
