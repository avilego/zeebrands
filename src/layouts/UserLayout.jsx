import { Outlet } from "react-router-dom";
import { Container, Row, Col } from "bootstrap-4-react";

const UserLayout = () => {
  return (
    <>
      <Container>
        <Row>
          <Outlet />
        </Row>
      </Container>
    </>
  );
};

export default UserLayout;
