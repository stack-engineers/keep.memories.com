import { Link } from "react-router-dom";
import { FaCameraRetro } from "react-icons/fa";
import useLogin from "../hooks/useLogin";

function LoginPage() {
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
      <section className="login-section-page">
        <div>
          <h1>
            <FaCameraRetro /> Welcome Back!
          </h1>
          <p>
            Welcome back to keep memories, if you are not registered, plz sign
            up for an account to continue.
          </p>
          <br />
          <br />
          <span>
            Do not have an account?{" "}
            <Link
              to={{
                pathname: "/signup",
              }}
            >
              Signup
            </Link>{" "}
          </span>
          <br />
        </div>
        <form action="" method="post">
          <span className="login-alert-message"></span>
          <input
            type="email"
            name="login-email"
            id="login-email"
            placeholder="email"
            aria-placeholder="email"
            required
            aria-required
          />
          <br />
          <input
            type="password"
            name="login-password"
            id="login-password"
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
                  (
                    window.document.querySelector(
                      "#login-password"
                    ) as HTMLInputElement
                  ).type = "text";
                } else {
                  (
                    window.document.querySelector(
                      "#login-password"
                    ) as HTMLInputElement
                  ).type = "password";
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

              useLogin(
                (
                  window.document.querySelector(
                    "#login-email"
                  ) as HTMLInputElement
                ).value,
                (
                  window.document.querySelector(
                    "#login-password"
                  ) as HTMLInputElement
                ).value
              );
            }}
          >
            Login
          </button>
        </form>
      </section>
    </>
  );
}

export default LoginPage;
