import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { closePopups } from "../../store/appSlice";
import { links } from "../../utils/config";

import "./Navigational.sass";

function Navigation({ location }) {
  const dispatch = useDispatch();
  const navClass = `nav nav__${location}`;
  const navLinkClass = `nav__link nav__link_${location}`;
  const handleClick = () => {
    dispatch(closePopups());
  };
  return (
    <nav className={navClass}>
      {links.map((link, i) => {
        return (
          <NavLink
            key={i}
            to={link.path}
            className={navLinkClass}
            activeclassname="active"
            onClick={handleClick}
          >
            {link.name}
          </NavLink>
        );
      })}
    </nav>
  );
}

export default Navigation;
