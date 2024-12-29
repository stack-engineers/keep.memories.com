import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function CodeValidationForm() {
  const [code, setCode] = useState("");
  useEffect(() => {
    setCode(code);
  }, [code]);

  return (
    <section className={String("email-validation")}>
      <article>
        <div>
          <h1>Enter verification code</h1>
          <p>
            Fill in the verification code sent to your email to verify your
            email account.
          </p>
          <br />
          <input
            type="number"
            name="code"
            id="code"
            placeholder="*****"
            aria-placeholder="*****"
            onChange={(event) => {
              setCode(event.target.value);
            }}
            value={code}
            maxLength={5}
          />
          <p>
            Did not get code,{" "}
            <Link
              to={{
                pathname: "/signup",
              }}
            >
              signup again with a correct email address
            </Link>
          </p>
          <br />
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              if (
                (window.document.querySelector("#code") as HTMLInputElement)
                  .value === ""
              ) {
                window.alert("please provide a code!");
              } else {
                window.location.href = "/signup/account/verification/status";
              }
            }}
          >
            Verify
          </button>
        </div>
      </article>
    </section>
  );
}

export default CodeValidationForm;
