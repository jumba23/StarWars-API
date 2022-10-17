import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./searchbar.css";

const SearchBar = ({ setSearchTerm }) => {
  const { pathname } = useLocation();
  const [formSearch, setFormSearch] = useState("");
  const [category, setCategory] = useState("");

  const handleChange = (e) => setFormSearch(e.target.value);
  useEffect(() => {
    setCategory(pathname.split("/")[1]);
  }, [pathname]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(formSearch);
    setFormSearch("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder={`Search ${category}`}
        value={formSearch}
        onChange={handleChange}
        autoFocus
      />
      <button type="submit">OK</button>
    </form>
  );
};

export default SearchBar;
