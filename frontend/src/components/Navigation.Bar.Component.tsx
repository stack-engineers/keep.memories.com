// import { FaCameraRetro } from "react-icons/fa";
import React from "react";
import { Link } from "react-router-dom";
import adminContext from "../context/adminContext";
import { AiOutlineSearch } from "react-icons/ai";
import LogoutAlertBox from "./Logout.Alert.Box.Component";
type Admin = string;

function NavigationBarComponent() {
  const context: Admin = React.useContext(adminContext) as Admin;
  const admin = JSON.parse(context);

  return (
    <>
      <nav className={String("navigation-bar")}>
        <div>
          <h1>
            <Link
              to={{
                pathname: "/",
              }}
            >
              <img src="/photos/camera.jpg" alt="" /> Free Photos Gallery
            </Link>
          </h1>
          <Link
            to={{
              pathname: admin ? "/" : "/login",
            }}
          >
            {admin
              ? `Logged in as ${admin.email as string}`
              : "Click here to login"}
          </Link>
        </div>
        <div className="xtz">
          <ul>
            <Link to={{ pathname: "/filter/searches" }}>
              <li>
                <AiOutlineSearch />
              </li>
            </Link>
            <Link to={{ pathname: "/about-us" }}>
              <li>About</li>
            </Link>
            <Link to={{ pathname: "/contact-us" }}>
              <li>Contact</li>
            </Link>
            {admin ? (
              ""
            ) : (
              <Link to={{ pathname: "/signup" }}>
                <li>Signup</li>
              </Link>
            )}
          </ul>
          {admin ? (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                (
                  window.document.querySelector(
                    ".logout-alert-box"
                  ) as HTMLElement
                ).style.display = "flex";
              }}
            >
              log out
            </button>
          ) : (
            ""
          )}
        </div>
      </nav>
      <LogoutAlertBox />
    </>
  );
}

export default NavigationBarComponent;
