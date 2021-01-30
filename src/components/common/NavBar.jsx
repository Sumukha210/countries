import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme, setTheme } from "../../Redux/Actions/ThemeAction";

const NavBar = () => {
  const history = useHistory();
  const [isToggle, setIsToggle] = useState(false);
  const localName = "toggleTheme";

  const lightTheme = useSelector(
    ({ ThemeReducer: { lightTheme } }) => lightTheme
  );
  const dispatch = useDispatch();

  useEffect(() => {
    let localTheme = localStorage.getItem(localName);
    if (localTheme) {
      dispatch(setTheme(JSON.parse(localTheme)));
    }
  }, []);

  useEffect(() => {
    setIsToggle(lightTheme);
    localStorage.setItem(localName, isToggle);
  }, [isToggle]);

  const handleToggle = () => {
    setIsToggle(prev => !prev);
    dispatch(changeTheme());
  };

  return (
    <div className="MainNav">
      <Navbar className="nav">
        <Navbar.Brand onClick={() => history.push("/")}>countries</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavLink exact to="/" activeClassName="true" className="nav-link">
              <i className="fas fa-home"></i>
              <span className="nav__text ml-2 d-none d-sm-inline">Home</span>
            </NavLink>

            <NavLink
              exact
              to="/map"
              activeClassName="true"
              className="nav-link">
              <i className="fas fa-map-marked-alt"></i>
              <span className="nav__text ml-2 d-none d-sm-inline">Map</span>
            </NavLink>

            <span className="nav-link toggleMode" onClick={handleToggle}>
              <i className={`fa${isToggle ? "r" : "s"} fa-sun`}></i>
              <span className="ml-2">
                {isToggle ? "dark mode" : "light mode"}
              </span>
            </span>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
