import { useState, useRef, useEffect, useContext } from "react";
import axios from "axios";
import { SearchContext } from "../service/searchContext";
import ButtonDefault from "../components/buttons/ButtonDefault";
import useAxios from "../hooks/useAxios";
const baseURL = `https://api.github.com/users/timmywheels/repos`;

const Home = () => {
  const handleSearch = useAxios();
  const inputSearch = useRef(null);
  const { setSearch, search } = useContext(SearchContext);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      console.log(response.data);
    });
  }, []);

  const onChangeTextSearch = (event) => {
    const text = inputSearch.current.value;
    setSearch(text);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch();
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col mt-3 text-center">
          <p class="h3">Search users and repositories</p>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-8 mx-auto">
          <form onSubmit={handleSubmit} className="form-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="User"
              onChange={onChangeTextSearch}
              ref={inputSearch}
            />
            <ButtonDefault text="Search" type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
