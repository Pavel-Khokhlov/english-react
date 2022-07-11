import React from "react";
import { NavLink } from "react-router-dom";
import { links } from "../../utils/config";

import "./Navigational.sass";

export interface INavigation {
  location: string;
  onClose?: () => void;
}

function Navigation({ location, onClose }: INavigation) {
  const navClass = `nav nav__${location}`;
  const navLinkClass = `nav__link nav__link_${location}`;
  return (
    <nav className={navClass}>
      {links.map((link, i) => {
        return (
          <NavLink
            key={i}
            to={link.path}
            className={(props)=>props.isActive ? `${navLinkClass} active` : navLinkClass}
            onClick={onClose}
          >
            {link.name}
          </NavLink>
        );
      })}
    </nav>
  );
}

export default Navigation;
