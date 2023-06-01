import search from "../assets/white_search_FILL1_wght400_GRAD0_opsz48.svg";
import locationIcon from "../assets/pin_drop_FILL1_wght400_GRAD0_opsz48.svg";
import propTypes from "prop-types";
import { useEffect } from "react";

const Filter = ({
  setSelected,
  locationVisibility,
  setLocationVisibility,
  guestsVisibility,
  setGuestsVisibility,
  location,
  setLocation,
  guests,
  setGuests,
  adults,
  setAdults,
  children,
  setChildren,
}) => {
  useEffect(() => {
    setGuests(adults + children);
  }, [adults, children, setGuests]);

  return (
    <div className="absolute bg-white w-full mt-0">
      <div className="edit-search flex justify-between mb-6">
        <p className="font-bold">Edit your search</p>
        <p
          onClick={() => setSelected(false)}
          className="font-bold text-xl cursor-pointer"
        >
          x
        </p>
      </div>

      <div className="form-div flex gap-5 flex-col sm:grid sm:grid-cols-3">
        <div className="sm:flex sm:col-start-1 sm:col-end-3 sm:gap-2">
          <div className="location-input-div pb-1 grow">
            <label
              htmlFor="location_input"
              className="absolute px-2 py-1 text-xs font-bold"
            >
              LOCATION
            </label>
            <input
              type="text"
              name="location"
              placeholder="Add location"
              className="pt-6 px-2 w-full border-2 rounded-t-lg sm:rounded-md"
              onClick={() => {
                setGuestsVisibility(false);
                setLocationVisibility(true);
              }}
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="guests-input-div grow">
            <label
              htmlFor="guests_input"
              className="absolute px-2 py-1 text-xs font-bold"
            >
              GUESTS
            </label>
            <input
              type="number"
              name="guests"
              placeholder="Add guests"
              className="pt-6 px-2 w-full border-2 rounded-b-lg sm:rounded-md"
              onClick={() => {
                setGuestsVisibility(true);
                setLocationVisibility(false);
              }}
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
            />
          </div>
        </div>

        {locationVisibility && (
          <div className="location-div flex flex-col gap-1 pt-30 mb-12">
            <div className="flex ">
              <img src={locationIcon} alt="location icon" />
              <p
                className="cursor-pointer"
                onClick={(e) => setLocation(e.target.innerText)}
              >
                Helsinki, Finland
              </p>
            </div>
            <div className="flex ">
              <img src={locationIcon} alt="locationIcon" />
              <p
                className="cursor-pointer"
                onClick={(e) => setLocation(e.target.innerText)}
              >
                Turku, Finland
              </p>
            </div>
            <div className="flex ">
              <img src={locationIcon} alt="locationIcon" />
              <p
                className="cursor-pointer"
                onClick={(e) => setLocation(e.target.innerText)}
              >
                Oulu, Finland
              </p>
            </div>
            <div className="flex ">
              <img src={locationIcon} alt="locationIcon" />
              <p
                className="cursor-pointer"
                onClick={(e) => setLocation(e.target.innerText)}
              >
                Vaasa, Finland
              </p>
            </div>
          </div>
        )}

        {guestsVisibility && (
          <div className="guests-details-div col-start-2">
            <div className="adults-div">
              <p>Adults</p>
              <p className="p-none m-none">Ages 13 or above</p>
              <div className="adult-counter flex justify-between w-20 mt-3 mb-10">
                <button
                  className="border border-black px-2 text-xl rounded-md"
                  onClick={() => setAdults(adults - 1)}
                >
                  -
                </button>
                <span>{adults}</span>
                <button
                  className="border border-black px-2 text-xl rounded-md"
                  onClick={() => setAdults(adults + 1)}
                >
                  +
                </button>
              </div>
            </div>
            <div className="children-div">
              <p>Children</p>
              <p>Ages 2-12</p>
              <div className="children-counter flex justify-between w-20 mt-3 mb-10">
                <button
                  className="border border-black px-2 text-xl rounded-md"
                  onClick={() => {
                    setChildren(children - 1);
                  }}
                >
                  -
                </button>
                <p>{children}</p>
                <button
                  className="border border-black px-2 text-xl rounded-md"
                  onClick={() => {
                    setChildren(children + 1);
                  }}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        )}

        <button
          className="bg-[#EB5757] text-white flex justify-center px-5 py-3 m-auto rounded-xl mb-10 sm:col-start-3 sm:row-start-1"
          onClick={() => setSelected(false)}
        >
          <img src={search} alt="search" className="w-6 h-6 p-1" />
          <div>SEARCH</div>
        </button>
      </div>
    </div>
  );
};

Filter.propTypes = {
  setSelected: propTypes.func,
  locationVisibility: propTypes.bool,
  setLocationVisibility: propTypes.func,
  guestsVisibility: propTypes.bool,
  setGuestsVisibility: propTypes.func,
  location: propTypes.string,
  guests: propTypes.number,
  setLocation: propTypes.func,
  setGuests: propTypes.func,
  adults: propTypes.number,
  children: propTypes.number,
  setAdults: propTypes.func,
  setChildren: propTypes.func,
};

export default Filter;
