import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { SearchContext } from "../service/searchContext";
import { ResultContext } from "../service/resultContext";

const useAxios = () => {
  const navigate = useNavigate();
  const { setSearch, search } = useContext(SearchContext);
  const { setResult } = useContext(ResultContext);

  const fetchData = async () => {
    await axios
      .get(`https://api.github.com/users/${search}/repos`)
      .then((res) => {
        const result = res.data;
        console.log(result);
        setResult(result);
        setSearch("");
        navigate(`search/user=${search}`);
      })
      .catch((err) => console.log(err));
  };

  return fetchData;
};

export default useAxios;
