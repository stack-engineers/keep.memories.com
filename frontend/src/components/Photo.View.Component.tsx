import { IoMdClose } from "react-icons/io";
import { FaCameraRetro } from "react-icons/fa";
import { Link } from "react-router-dom";

function PhotoViewComponent() {
  return (
    <aside className={String("photo-view")}>
      <div>
        <aside className={String("nav")}>
          <span>
            <FaCameraRetro />
          </span>
          <div>
            <p className="resource_admin">admin@gmail.com</p>
            <p className="upload_date">12/34/6202</p>
          </div>
          <span
            className="close"
            onClick={(event) => {
              event.stopPropagation();
              (
                window.document.querySelector(".photo-view") as HTMLElement
              ).style.display = "none";
            }}
          >
            <IoMdClose />
          </span>
        </aside>
        <aside className={String("photo")}>
          <img src="/dark-skies-2023.jpg" alt="" className="img-placeholder" />
        </aside>
      </div>
      <Link
        to={{
          pathname: "",
        }}
        className="resource_collection_ul"
      >
        View More
      </Link>
    </aside>
  );
}

export default PhotoViewComponent;
