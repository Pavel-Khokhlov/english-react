import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import PopupMenu from "../PopupMenu/PopupMenu";

import "./Header.sass";

function Header() {
  const [isMenuPopupOpen, setIsMenuPopupOpen] = useState<boolean>(false);
  const [position, setPosition] = useState(0);

  const handleMenuClick = () => {
    isMenuPopupOpen ? setIsMenuPopupOpen(false) : setIsMenuPopupOpen(true);
  };

  const handleMenuClose = () => {
    setIsMenuPopupOpen(false);
  }

  useEffect(() => {
    const newPosition = window.scrollY;
    if (isMenuPopupOpen) {
      setPosition(newPosition);
      document.body.setAttribute('style', `position: fixed; top: -${position}px; left: 0; right: 0;`);
    } else {
      document.body.setAttribute('style', '');
      window.scrollTo(0, position);
    }
  }, [isMenuPopupOpen, position])

  return (
    <>
      <header className="header">
        <div className="header__body">
          <Logo onClose={handleMenuClose} />
          <Navigation location="header" />
          <Button
            isOpen={isMenuPopupOpen}
            type="button"
            menu
            onClick={handleMenuClick}
          />
        </div>
      </header>
      <PopupMenu isOpen={isMenuPopupOpen} onClose={handleMenuClose} />
    </>
  );
}

export default Header;
