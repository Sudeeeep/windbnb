import propTypes from "prop-types";
import star from "../assets/star_FILL1_wght400_GRAD0_opsz48.svg";

const Stays = ({ data }) => {
  return (
    <div className="flex flex-col sm:grid gap-16 grid-cols-2 min-[1085px]:grid-cols-3">
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
  );
};

Stays.propTypes = {
  data: propTypes.array,
};

export default Stays;
