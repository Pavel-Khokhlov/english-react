import React from "react";
import Navigation from "../Navigation/Navigation";

import "./Footer.sass";

function Footer() {
  return (
    <footer className="footer">
      <section className="footer__body">
        <Navigation location="footer" />
        <p className="footer__paragraph">@Created by Business Web Studio</p>
      </section>
    </footer>
  );
}

export default Footer;
