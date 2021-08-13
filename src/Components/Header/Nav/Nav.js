import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
const Nav = () => {
  return (
    <div>
      <Navbar dark color="dark">
        <div className="container">
          <NavbarBrand href="/">Restaurant</NavbarBrand>
        </div>
      </Navbar>
    </div>
  );
};

export default Nav;
