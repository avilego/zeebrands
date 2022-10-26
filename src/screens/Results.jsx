import { useContext } from "react";
import { ResultContext } from "../service/resultContext";

const Results = () => {
  const { result } = useContext(ResultContext);

  const handleClone = () => {};

  return (
    <>
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
                  onClick={() => navigator.clipboard.writeText(item.clone_url)}
                >
                  clonar
                </p>
                <a href="#" class="card-link">
                  Another link
                </a>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default Results;
