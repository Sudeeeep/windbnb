import propTypes from "prop-types";
import star from "../assets/star_FILL1_wght400_GRAD0_opsz48.svg";

const Stays = ({ data, guests, selected, location }) => {
  let LocationCity = "";

  if (location != "") {
    let locationArray = location.split("");

    locationArray.includes(",")
      ? (LocationCity = location.slice(0, locationArray.indexOf(",")))
      : (LocationCity = location);
  }

  if (selected === false) {
    if (LocationCity !== "") {
      data = data.filter(
        (item) => item.city.toLowerCase() === LocationCity.toLowerCase()
      );
    }
    if (guests > 0) {
      data = data.filter((item) => item.maxGuests >= guests);
    }
  }

  return (
    <>
      <div className="flex justify-between mt-10 mb-5">
        <h3 className="font-bold text-lg text-gray-800">Stays in Finland</h3>
        <p>12+ stays</p>
      </div>
      <div className="flex flex-col mb-10 sm:grid gap-10 grid-cols-2 mx-5 min-[1085px]:grid-cols-3">
        {data.map((item, index) => (
          <div key={index} className="main-container flex flex-col gap-2 ">
            <div className="h-60">
              <img src={item.photo} className="rounded-xl h-full w-full"></img>
            </div>
            <div className="details-container flex justify-between">
              <div className="flex gap-2 items-center">
                {item.superHost && (
                  <button className="rounded-full border-2 border-black px-2 py-1 text-xs font-bold text-gray-800">
                    SUPER HOST
                  </button>
                )}
                <p className="text-gray-800">
                  {item.type}. <span>{item.beds} beds</span>
                </p>
              </div>
              <div className="flex items-center gap-1">
                <img src={star} alt="rating" className="w-5" />
                <p className="text-gray-800">{item.rating}</p>
              </div>
            </div>
            <p className="font-bold text-gray-800">{item.title}</p>
          </div>
        ))}
      </div>
    </>
  );
};

Stays.propTypes = {
  data: propTypes.array,
  guests: propTypes.number,
  selected: propTypes.bool,
  location: propTypes.string,
};

export default Stays;
