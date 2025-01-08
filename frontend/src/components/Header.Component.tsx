import { FaSearch } from "react-icons/fa";

function HeaderComponent() {
  return (
    <>
      <header className="application-header">
        <article>
          <div>
            <img src="/photos/camera.jpg" alt="" />
          </div>
          <div>
            <h1>
              Upload, share & download your favorite <strong>photos</strong>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              inventore alias ea provident temporibus, nostrum veritatis
              praesentium neque culpa quidem labore itaque velit illum sit,
              sapiente perferendis atque quo hic?
            </p>
            <br />
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                window.location.href = "/filter/searches";
              }}
            >
              Find In Searches <FaSearch />
            </button>
          </div>
        </article>
      </header>
    </>
  );
}

export default HeaderComponent;
