import React, { MouseEventHandler } from "react";
import { NavLink } from "react-router-dom";

import "./Logo.sass";

interface ILogo {
  onClose: MouseEventHandler<HTMLAnchorElement>;
}

function Logo({onClose}: ILogo) {
  return (
    <NavLink to="/" className="logo" onClick={onClose}>
      Logo
    </NavLink>
  );
}

export default Logo;
