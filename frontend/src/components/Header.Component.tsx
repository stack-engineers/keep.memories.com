import { Link } from "react-router-dom";

function HeaderComponent() {
  try {
    return (
      <>
        <header className="header" id="header">
          <article>
            <h1>Home Photo Gallery For You</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Molestiae vel, optio error nemo eius, quod ratione libero eum
              mollitia fugiat quibusdam! Porro autem, quaerat sapiente
              temporibus veritatis officiis dolore at a fugit saepe quod nemo
              obcaecati perferendis. Voluptatem, minima eius.
            </p>
            <Link
              to={{
                pathname: "/photos/categories/all",
              }}
            >
              <button type="button">checkout gallery</button>
            </Link>
          </article>
        </header>
      </>
    );
  } catch (error) {
    console.warn(error);
  }
}

export default HeaderComponent;
