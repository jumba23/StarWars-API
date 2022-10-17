import React from "react";
import { useLocation } from "react-router-dom";
import "./header.css";
import Nav from "../Nav/Nav";
import SearchBar from "../SearchBar/SearchBar";

const Header = ({ setSearchTerm }) => {
  const { pathname } = useLocation();
  return (
    <>
      <h1>STAR WARS DATA</h1>
      {pathname === "/" ? (
        <p>
          Make your selection and <span>may the force be with you!</span>
        </p>
      ) : (
        <div className="header-nav-search">
          <Nav />
          <SearchBar setSearchTerm={setSearchTerm} />
        </div>
      )}
    </>
  );
};

export default Header;
