// import { IoMdClose } from "react-icons/io";
import { FaCameraRetro } from "react-icons/fa";
// import { Link } from "react-router-dom";

function PhotoViewComponent() {
  function handleButtonClick(): void {
    const view: HTMLElement = window.document.querySelector(
      ".photo-view"
    ) as HTMLElement;
    view.style.display = "none";
  }

  return (
    <aside className={String("photo-view")}>
      <div className="__photo-view-nav">
        <span>
          <FaCameraRetro />
        </span>
        <div>
          <p className="resource_admin"></p>
          <p className="upload_date"></p>
        </div>
      </div>
      <div className="__photo">
        <img src="" alt="" className="img-placeholder" />
      </div>
      <div className="__photo-view-footer">
        <button
          type="button"
          className="close-photo-view-section-button"
          onClick={handleButtonClick}
        >
          close view
        </button>
      </div>
    </aside>
  );
}

export default PhotoViewComponent;
