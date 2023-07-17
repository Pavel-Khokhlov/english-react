import React from "react";
import Navigation from "../Navigation/Navigation";

import app_json from "../../../package.json";

import "./Footer.sass";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <section className="footer__body">
        <Navigation location="footer" />
        <div className="footer__info">
          <p className="footer__paragraph">
            &#9400; {process.env.REACT_APP_YEAR_START} - {currentYear} Created by Business Web Studio
          </p>
          <p className="footer__paragraph">
            Version: {app_json.version}
          </p>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
