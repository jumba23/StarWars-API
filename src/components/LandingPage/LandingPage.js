import "./landingpage.css";
import { NavLink } from "react-router-dom";

const LandingPage = ({ handleClick }) => {
  const handleSelection = (e) => {
    let selectedCategory = e.currentTarget.textContent.toLowerCase();
    handleClick(selectedCategory);
  };

  return (
    <div className="category-cards">
      <NavLink
        className="individual-card"
        to="/people"
        onClick={handleSelection}
      >
        PEOPLE
      </NavLink>
      <NavLink
        className="individual-card"
        to="/planets"
        onClick={handleSelection}
      >
        PLANETS
      </NavLink>
      <NavLink
        className="individual-card"
        to="/vehicles"
        onClick={handleSelection}
      >
        VEHICLES
      </NavLink>
      <NavLink
        className="individual-card"
        to="/species"
        onClick={handleSelection}
      >
        SPECIES
      </NavLink>
    </div>
  );
};

export default LandingPage;
