import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./details.css";

const Details = ({ list }) => {
  const { pathname } = useLocation();
  const { id } = useParams();
  let i = id - 1;
  const [details, setDetails] = useState([]);

  useEffect(() => {
    switch (true) {
      case pathname.includes("people"):
        const people = [
          ["Name", list[i].name],
          ["Height", list[i].height],
          ["Mass", list[i].mass],
          ["Born", list[i].birth_year],
        ];
        setDetails(people);
        break;
      case pathname.includes("planets"):
        const planets = [
          ["Name", list[i].name],
          ["Rotation", list[i].rotation_period],
          ["Orbit", list[i].orbital_period],
          ["Climate", list[i].climate],
        ];
        setDetails(planets);
        break;
      case pathname.includes("vehicles"):
        const vehicles = [
          ["Name", list[i].name],
          ["Model", list[i].model],
          ["Length", list[i].length],
          ["Crew", list[i].crew],
        ];
        setDetails(vehicles);
        break;
      case pathname.includes("species"):
        const species = [
          ["Name", list[i].name],
          ["Classification", list[i].classification],
          ["Language", list[i].language],
          ["Designation", list[i].designation],
        ];
        setDetails(species);
        break;
    }
  }, [pathname]);

  return (
    <div className="search-data-details">
      <h5>More info</h5>
      {details.map((element, i) => (
        <div className="details-row" key={i}>
          <div className="detail-label">{element[0]}:</div>
          <div className="detail-info"> {element[1]} </div>
        </div>
      ))}
    </div>
  );
};

export default Details;
