/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ResultContext } from "../service/resultContext";
import { SearchContext } from "../service/searchContext";

const Results = () => {
  const navigate = useNavigate();
  const { result } = useContext(ResultContext);
  const { search } = useContext(SearchContext);

  useEffect(() => {
    if (!search) navigate("/");
  }, [search]);

  return (
    <>
      <div className="d-flex flex-column w-100 m-auto">
        <p className="h3 text-center mt-3">{search}</p>
        {result &&
          result.map((item) => (
            <div className="card w-75 mx-auto my-2" key={item.id}>
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  {item.full_name}
                </h6>
                <p className="card-text">{item.description}</p>
                <div className="d-flex justify-content-between">
                  <p
                    href="#"
                    className="card-link"
                    onClick={() =>
                      navigator.clipboard.writeText(item.clone_url)
                    }
                  >
                    Clone
                  </p>
                  <a href={item.clone_url} className="card-link">
                    Go to repo
                  </a>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Results;
