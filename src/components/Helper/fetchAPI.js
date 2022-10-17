import axios from "axios";
const baseURL = "https://swapi.dev/api/";

const getCategory = async (pathname) => {
  const getRequestResult = await axios(baseURL + pathname);
  let ListArray = getRequestResult.data.results;
  return ListArray;
};

const getSearchTerm = async (searchTerm, category) => {
  const getRequestResult = await axios(
    baseURL + `${category}/?search=${searchTerm}`
  );
  let SearchList = getRequestResult.data.results;
  return SearchList;
};

export { getCategory, getSearchTerm };
