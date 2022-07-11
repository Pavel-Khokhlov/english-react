import React from "react";
import { NavLink } from "react-router-dom";

import "./Logo.sass";

interface ILogo {
  onClose: () => void;
}

function Logo({onClose}: ILogo) {
  return (
    <NavLink to="/" className="logo" onClick={onClose}>
      LOGO
    </NavLink>
  );
}

export default Logo;
