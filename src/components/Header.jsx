import logo from "../assets/logo.svg";
import searchLogo from "../assets/search_FILL1_wght400_GRAD0_opsz48.svg";
import propTypes from "prop-types";

const Header = ({ setSelected }) => {
  return (
    <>
      <header className="min-[580px]:flex justify-between my-3 ">
        <img src={logo} alt="windbnb logo" />
        <div className="flex items-center m-6 min-[580px]:m-0">
          <input
            className="mr-0.5 p-1 border-2 rounded-s-lg w-1/2"
            placeholder="Add location"
            type="text"
            onClick={() => setSelected(true)}
          />
          <input
            className="mr-0.5 p-1 border-2 w-1/2"
            placeholder="Add guests"
            type="text"
            onClick={() => setSelected(true)}
          />
          <button
            className="border-2 rounded-e-lg outline-none min-w-fit"
            onClick={() => setSelected(true)}
          >
            <img src={searchLogo} className=" w-8 h-8  p-1" alt="search" />
          </button>
        </div>
      </header>
    </>
  );
};

Header.propTypes = {
  setSelected: propTypes.func,
};

export default Header;
