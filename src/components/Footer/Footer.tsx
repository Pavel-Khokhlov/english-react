import React from "react";
import Navigation from "../Navigation/Navigation";

import "./Footer.sass";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <section className="footer__body">
        <Navigation location="footer" />
        <p className="footer__paragraph">@Created by Business Web Studio</p>
        <p className="footer__paragraph">{process.env.REACT_APP_YEAR_START} - {currentYear}</p>
      </section>
    </footer>
  );
}

export default Footer;
