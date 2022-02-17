import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { openMenuPopup } from "../../store/appSlice";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";

import "./Header.sass";

function Header() {
  const dispatch = useDispatch();
  const { isMenuPopupOpen } = useSelector(
    (state) => state.app
  );
  const buttonClass = `button button__menu${isMenuPopupOpen ? " _active" : ""}`;

  const handleMenuClick = () => {
    dispatch(openMenuPopup());
  };

  return (
    <header className="header">
      <div className="header__body">
        <Logo />
        <Navigation location="header" />
        <Button type="button" className={buttonClass} onClick={handleMenuClick} >
          <span className="button__menu_span"></span>
        </Button>
      </div>
    </header>
  );
}

export default Header;
