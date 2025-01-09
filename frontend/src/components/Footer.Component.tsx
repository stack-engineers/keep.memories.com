// import { Link } from "react-router-dom";
// import { FaCameraRetro } from "react-icons/fa";
import { dateContext } from "../main";
import React from "react";
import { FaHeart } from "react-icons/fa";
import NewsletterComponent from "./Newsletter.Component";

type Date = string;

function FooterComponent() {
  const date: Partial<Readonly<Date>> = React.useContext(
    dateContext
  ) as Partial<Readonly<Date>>;

  return (
    <>
      <footer className="footer">
        <NewsletterComponent />
        <div className="__footer-information-wrapper">
          <ul>
            <li>
              <a href="https://robertsims.netlify.app/" target="_blank">
                Developer
              </a>
            </li>
            <li>
              <a
                href="https://keep-memories-rest-api.onrender.com/"
                target="_blank"
              >
                Api
              </a>
            </li>
            <li>
              <a href="" target="_blank">
                Sponsors
              </a>
            </li>
          </ul>
        </div>
        <div className="copyright-wrapper">
          <span>
            All rights reserved &copy;right keep memories {date as string}
          </span>
        </div>
      </footer>
    </>
  );
}

export default FooterComponent;
