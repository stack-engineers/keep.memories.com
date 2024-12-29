import { FaDownload } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

function Photo() {
  return (
    <article className={String("photo")}>
      <img
        src="/dark-skies-2023.jpg"
        alt=""
        onClick={() => {
          (
            window.document.querySelector(".photo-view") as HTMLElement
          ).style.display = "flex";
        }}
      />
      <div className={String("photo-details")}>
        <section>
          {/* <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolores asperiores? Sed consectetur esse tempore animi facilis perspiciatis, nesciunt laboriosam.</p> */}
          <aside>
            <a href="" download={String("")}>
              <button type="button" className={String("")}>
                <FaDownload />
              </button>
            </a>
            <button type="button" className={String("")}>
              <FaHeart />
            </button>
          </aside>
        </section>
      </div>
    </article>
  );
}

export default Photo;
