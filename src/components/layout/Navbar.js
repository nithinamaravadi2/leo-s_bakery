import React from "react";
import { Menu } from "semantic-ui-react";
import { Link, NavLink } from "react-router-dom";
//import logo from "../../logo.svg";

function Navbar() {
  return (
    <Menu borderless fixed="top">
      <Menu.Item>
        <Menu.Header style={{ marginRight: "25px"}}>
          <img style={{height: "30px", width: "30px"}} src={"https://res.cloudinary.com/dqc90vi99/image/upload/v1696915471/dwfjpwkghl3p6pdbjbk0.png"} />
        </Menu.Header>
      </Menu.Item>
      <Menu.Item as={Link} to="/" content="Home" />
      <Menu.Item as={NavLink} to="/recipes" content="Recipes" />
    </Menu>
  );
}
export default Navbar;
