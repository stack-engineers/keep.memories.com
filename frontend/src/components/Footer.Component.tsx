// import { Link } from "react-router-dom";
// import { FaCameraRetro } from "react-icons/fa";
import { dateContext } from "../main";
import React from "react";
import { FaHeart } from "react-icons/fa";
import NewsletterComponent from "./Newsletter.Component";

function FooterComponent() {
  const date: string = React.useContext(dateContext) as string;

  return (
    <>
      <br />
      <footer className="footer">
        <NewsletterComponent />
        <aside>
          <span>
            Developed with <FaHeart /> by{" "}
            <a
              href="https://robertsims.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              robert sims
            </a>
          </span>
          <span>All rights reserved &copy; {date}</span>
        </aside>
      </footer>
    </>
  );
}

export default FooterComponent;
