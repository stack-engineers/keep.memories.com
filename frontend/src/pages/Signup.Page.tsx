import { Link } from "react-router-dom";
import { FaCameraRetro } from "react-icons/fa";
import useSignup from "../hooks/useSignup";

function SignupPage() {
  return (
    <>
      <div className="secondary-navigation-bar">
        <div>
          <Link
            to={{
              pathname: "/",
            }}
          >
            <h1>
              <FaCameraRetro /> Keep Memories
            </h1>
          </Link>
        </div>
      </div>
      <section className={String("signup-section-page")}>
        <div>
          <h1>
            <FaCameraRetro /> You are Welcome!
          </h1>
          <p>
            You are welcome to keep memories, if you are registered, plz log
            into your account to continue.
          </p>
          <br />
          <br />
          <span>
            Already have an account?{" "}
            <Link
              to={{
                pathname: "/login",
              }}
            >
              Login
            </Link>{" "}
          </span>
          <br />
        </div>
        <form action="" method="post">
          <span className="signup-alert-message"></span>
          <br />
          <input
            type="text"
            name="username"
            id="username"
            placeholder="username"
            aria-placeholder="username"
            required
            aria-required
          />
          <br />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="email"
            aria-placeholder="email"
            required
            aria-required
          />
          <br />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            aria-placeholder="password"
            required
            aria-required
          />
          <br />
          <article>
            <input
              type="checkbox"
              name="show-password"
              id="show-password"
              onChange={(event) => {
                event.stopPropagation();
                if (event.target.checked) {
                  const password: HTMLInputElement =
                    window.document.querySelector(
                      "#password"
                    ) as HTMLInputElement;
                  password.type = "text";
                } else {
                  const password: HTMLInputElement =
                    window.document.querySelector(
                      "#password"
                    ) as HTMLInputElement;
                  password.type = "password";
                }
              }}
            />
            <label htmlFor="show-password">show password</label>
          </article>
          <br />
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              useSignup(
                (window.document.querySelector("#username") as HTMLInputElement)
                  .value,
                (window.document.querySelector("#email") as HTMLInputElement)
                  .value,
                (window.document.querySelector("#password") as HTMLInputElement)
                  .value
              );
            }}
          >
            Signup
          </button>
        </form>
      </section>
    </>
  );
}

export default SignupPage;
