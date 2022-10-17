import React, { useState, useEffect } from "react";
import LandingPage from "../LandingPage/LandingPage";
import Details from "../Details/Details";
import Names from "../Names/Names";
import { Routes, Route, useLocation } from "react-router-dom";
import { getCategory, getSearchTerm } from "../Helper/fetchAPI";
import { NavLink } from "react-router-dom";
import "./main.css";

const Main = ({ searchTerm }) => {
  const { pathname } = useLocation();
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [species, setSpecies] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [routes, setRoutes] = useState([
    "/people",
    "/planets",
    "/vehicles",
    "/species",
  ]);

  useEffect(() => {
    if (routes.indexOf(pathname) > -1) {
      updateRouteArray();
      fetchCategory();
    }
  }, [pathname]);

  useEffect(() => {
    fetchSearchTerm();
  }, [searchTerm]);

  const fetchCategory = async () => {
    await getCategory(pathname)
      .then((returnedCategory) => {
        checkRouteCategory(returnedCategory);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const fetchSearchTerm = async () => {
    if(pathname === "/StarWars-API/") return
    await getSearchTerm(searchTerm, pathname.split("/")[1])
      .then((returnedSearchTerm) => {
        checkRouteCategory(returnedSearchTerm);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const updateRouteArray = () => {
    let index = routes.indexOf(pathname);
    let tempRoutes = [...routes];
    tempRoutes.splice(index, 1);
    return setRoutes(tempRoutes);
  };

  const checkRouteCategory = (returnedFetch) => {
    switch (true) {
      case pathname.includes("/people"):
        setPeople(returnedFetch);
        break;
      case pathname.includes("/planets"):
        setPlanets(returnedFetch);
        break;
      case pathname.includes("/species"):
        setSpecies(returnedFetch);
        break;
      case pathname.includes("/vehicles"):
        setVehicles(returnedFetch);
        break;
    }
  };

  return (
    <>
      <div className="main-display">
        <Routes>
        <Route path="/" element={<LandingPage />}/>
          <Route path="/people" element={<Names list={people} />}>
            <Route path=":id" element={<Details list={people} />} />
          </Route>
          <Route path="/planets" element={<Names list={planets} />}>
            <Route path=":id" element={<Details list={planets} />} />
          </Route>
          <Route path="/vehicles" element={<Names list={vehicles} />}>
            <Route path=":id" element={<Details list={vehicles} />} />
          </Route>
          <Route path="/species" element={<Names list={species} />}>
            <Route path=":id" element={<Details list={species} />} />
          </Route>
          <Route
            path="/"
            exact
            render={() => {
              return <LandingPage />;
            }}
          />
        </Routes>
      <div className="home-link">
      <NavLink
        to="/"
        style={({ isActive }) => ({ isActive : true })}
      >
        HOME
      </NavLink>
      </div>
      </div>
    </>
  );
};

export default Main;
