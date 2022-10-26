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

  const handleClone = (clone) => {
    navigator.clipboard.writeText(clone);
  };

  return (
    <>
      <p className="h3">{search}</p>
      {result &&
        result.map((item) => (
          <div class="card w-75 mx-auto my-2">
            <div class="card-body">
              <h5 class="card-title">{item.name}</h5>
              <h6 class="card-subtitle mb-2 text-muted">{item.full_name}</h6>
              <p class="card-text">{item.description}</p>
              <div className="d-flex justify-content-between">
                <p
                  href="#"
                  class="card-link"
                  onClick={handleClone(item.clone_url)}
                >
                  clonar
                </p>
                <p href="#" class="card-link">
                  Another link
                </p>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default Results;
