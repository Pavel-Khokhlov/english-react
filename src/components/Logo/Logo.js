import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { closePopups } from "../../store/appSlice";

import "./Logo.sass";

function Logo() {
  const dispatch = useDispatch();
  const handleLogoClick = () => {
    dispatch(closePopups());
  };
  return (
    <NavLink to="/" className="logo" onClick={handleLogoClick}>
      LOGO
    </NavLink>
  );
}

export default Logo;
