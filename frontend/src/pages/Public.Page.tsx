import NavigationBarComponent from "../components/Navigation.Bar.Component";
import React, { useRef, useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import { Link } from "react-router-dom";
import FooterComponent from "../components/Footer.Component";
import LogoutAlertBox from "../components/Logout.Alert.Box.Component";
import adminContext from "../context/adminContext";

function PublicPage() {
  const context: string = React.useContext(adminContext) as string;
  const admin = JSON.parse(context);

  const [value, setValue] = useState([
    {
      id: String(uuid()),
      title: "click to view all categories of photos",
      bg_photo: (
        <img
          src="/all-text-wooden-cubes-bright-surface-black-pot-with-flower_126791-506.jpg"
          alt=""
        />
      ),
      href: "/photos/categories/all",
      value: "All",
    },
    {
      id: String(uuid()),
      title: "click to view people categories of photos",
      bg_photo: <img src="/people.jpg" alt="" />,
      href: "/photos/categories/people",
      value: "People",
    },
    {
      id: String(uuid()),
      title: "click to view nature categories of photos",
      bg_photo: <img src="/nature.jpg" alt="" />,
      href: "/photos/categories/nature",
      value: "Nature",
    },
    {
      id: String(uuid()),
      title: "click to view technology categories of photos",
      bg_photo: (
        <img
          src="/laptop-table-with-opened-code-editor-programming-style-technology-background_946657-18866.avif"
          alt=""
        />
      ),
      href: "/photos/categories/technology",
      value: "Technology",
    },
    {
      id: String(uuid()),
      title: "click to view animals categories of photos",
      bg_photo: (
        <img
          src="/cute-massai-giraffe-tsavo-east-national-park-kenya-africa_181624-26133.jpg"
          alt=""
        />
      ),
      href: "/photos/categories/animals",
      value: "Animals",
    },
    {
      id: String(uuid()),
      title: "click to view food categories of photos",
      bg_photo: <img src="/pexels-alxs-3025236.jpg" alt="" />,
      href: "/photos/categories/food",
      value: "Food",
    },
    {
      id: String(uuid()),
      title: "click to view dark categories of photos",
      bg_photo: <img src="/dark.avif" alt="" />,
      href: "/photos/categories/dark-photos",
      value: "Sports",
    },
    {
      id: String(uuid()),
      title: "click to view sports categories of photos",
      bg_photo: (
        <img src="/female-rugby-player-holding-ball_23-2148793344.jpg" alt="" />
      ),
      href: "/photos/categories/sports",
      value: "Sports",
    },
    {
      id: String(uuid()),
      title: "click to view illustrations categories of photos",
      bg_photo: <img src="/illustrations.jpg" alt="" />,
      href: "/photos/categories/illustrations",
      value: "Sports",
    },
  ]);

  const ref = useRef(value);
  useEffect(() => {
    setValue(value);
  }, [value]);

  return (
    <>
      <NavigationBarComponent />
      <main className={String("public-page")}>
        <br />
        <br />
        <h1>{String("all in our photo gallery").toLocaleUpperCase()}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam non
          asperiores vel aspernatur, distinctio voluptatum soluta esse ab vero
          corrupti a eligendi eos id dolorum.
        </p>
        <br />
        <br />
        <section className={String("photos-categories")}>
          {ref.current.map((index) => (
            <Link
              to={index.href}
              key={index.id}
              title={index.title}
              className={index.value}
            >
              {index.bg_photo}
            </Link>
          ))}
        </section>
        <LogoutAlertBox />
        <br />
        <br />
        {admin ? (
          <Link
            to={{
              pathname: "/admin/dashboard",
            }}
          >
            Upload Photos
          </Link>
        ) : (
          <Link
            to={{
              pathname: "/login",
            }}
          >
            Login to upload photos
          </Link>
        )}
      </main>
      <FooterComponent />
    </>
  );
}

export default PublicPage;
