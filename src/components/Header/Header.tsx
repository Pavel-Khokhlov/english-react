import React, { useState } from "react";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import PopupMenu from "../PopupMenu/PopupMenu";

import "./Header.sass";

function Header() {
  const [isMenuPopupOpen, setIsMenuPopupOpen] = useState<boolean>(false);
  const buttonClass = `button button__menu ${isMenuPopupOpen ? "active" : ""}`;

  const handleMenuClick = () => {
    isMenuPopupOpen ? setIsMenuPopupOpen(false) : setIsMenuPopupOpen(true);
  };

  const handleMenuClose = () => {
    setIsMenuPopupOpen(false);
  }

  return (
    <>
      <header className="header">
        <div className="header__body">
          <Logo onClose={handleMenuClose} />
          <Navigation location="header" onClose={handleMenuClose} />
          <Button
            type="button"
            className={buttonClass}
            onClick={handleMenuClick}
          >
            <span className="button__menu_span"></span>
          </Button>
        </div>
      </header>
      <PopupMenu isOpen={isMenuPopupOpen} onClose={handleMenuClose} />
    </>
  );
}

export default Header;
