import { Outlet } from "react-router-dom";
import { Container, Row, Col } from "bootstrap-4-react";
import NavbarTop from "../components/NavbarTop";

const UserLayout = () => {
  return (
    <>
      <Container px="0">
        <Row mx="0">
          <NavbarTop />
        </Row>
        <Row>
          <Outlet />
        </Row>
      </Container>
    </>
  );
};

export default UserLayout;
