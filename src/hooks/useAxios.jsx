import { useEffect, useContext } from "react";
import axios from "axios";
import { SearchContext } from "../service/searchContext";
import { ResultContext } from "../service/resultContext";

const useAxios = () => {
  const { setSearch, search } = useContext(SearchContext);
  const { setResult } = useContext(ResultContext);

  const fetchData = async () => {
    await axios
      .get(`https://api.github.com/users/${search}/repos`)
      .then((res) => {
        const result = res.data;
        console.log(result);
        setResult(result);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return fetchData;
};

export default useAxios;
