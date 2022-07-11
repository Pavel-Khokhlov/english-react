import React from "react";
import Navigation from "../Navigation/Navigation";

import "./PopupMenu.sass";

interface IPopupMenu {
  isOpen: boolean;
  onClose?: () => void;
}

function PopupMenu({isOpen, onClose}: IPopupMenu) {
  const popupClass = `popup popup__menu ${isOpen ? "active" : ""}`;

  return (
    <section className={popupClass}>
      <Navigation location="menu" onClose={onClose} />
    </section>
  );
}

export default PopupMenu;
