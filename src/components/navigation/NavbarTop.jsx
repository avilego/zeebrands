import logo from "../../assets/images/logo2.png";

const NavbarTop = () => {
  return (
    <nav class="navbar navbar-light bg-light w-100">
      <a class="navbar-brand" href="https://zebrands.mx/">
        <img
          src={logo}
          width="100"
          height="30"
          class="d-inline-block align-top"
          alt=""
        />
        Github API
      </a>
    </nav>
  );
};

export default NavbarTop;
