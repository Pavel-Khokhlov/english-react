import React from "react";
import { useSelector } from "react-redux";
import Navigation from "../Navigation/Navigation";

import "./PopupMenu.sass";

function PopupMenu() {
  //const dispatch = useDispatch();
  const { isMenuPopupOpen } = useSelector(
    (state) => state.app
  );
  const popupClass = `popup popup__menu${isMenuPopupOpen ? " _active" : ""}`;

  return (
    <section className={popupClass}>
      <Navigation location="menu" />
    </section>
  );
}

export default PopupMenu;
