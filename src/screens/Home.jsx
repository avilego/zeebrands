import InputText from "../components/inputs/InputText";

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col mt-3 text-center">
          <p class="h3">Search users and repositories</p>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-8 mx-auto">
          <InputText placeholder="User" />
        </div>
      </div>
    </div>
  );
};

export default Home;
