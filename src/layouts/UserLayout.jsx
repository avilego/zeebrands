import { Outlet } from "react-router-dom";
import NavbarTop from "../components/navigation/NavbarTop";

const UserLayout = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <NavbarTop />
        </div>
        <div className="row">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default UserLayout;
