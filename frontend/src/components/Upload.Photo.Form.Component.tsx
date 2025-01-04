import { IoMdClose } from "react-icons/io";
import React from "react";
import adminContext from "../context/adminContext";
import Upload from "../functions/Upload";

function UploadPhotoForm() {
  const context: string = React.useContext(adminContext) as string;
  const admin = JSON.parse(context);

  return (
    <section className={String("upload-form")}>
      <form action="" method="post">
        <h1>Insert photo url to upload!</h1>
        <br />
        <input
          type="text"
          name="title"
          id="title"
          maxLength={30}
          placeholder={String("title for the photo")}
          aria-placeholder={String("title for the photo")}
          title="enter title for the photo"
        />
        <br />
        <input
          type="text"
          name="file"
          id="file"
          placeholder={String("photo address")}
          aria-placeholder={String("photo address")}
          title="enter photo address"
        />
        <br />
        <select name="categories" id="categories">
          <option value={String("people")}>people</option>
          <option value={String("nature")}>nature</option>
          <option value={String("dark")}>dark</option>
          <option value={String("technology")}>technology</option>
          <option value={String("animals")}>animals</option>
          <option value={String("food")}>food</option>
          <option value={String("illustrations")}>illustrations</option>
          <option value={String("sports")}>sports</option>
        </select>
        <br />
        {admin ? (
          <div className="checkbox">
            <input type="checkbox" name="share-status" id="share-status" />
            <label htmlFor="check">Share to public gallery!</label>
          </div>
        ) : (
          ""
        )}
        <p className="warning"></p>
        <br />
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            const title = (
              window.document.querySelector("#title") as HTMLInputElement
            ).value;
            const url = (
              window.document.querySelector("#file") as HTMLInputElement
            ).value;
            const categories = (
              window.document.querySelector("#categories") as HTMLInputElement
            ).value;
            const shareStatus = (
              window.document.querySelector("#share-status") as HTMLInputElement
            ).checked;
            const warningElement = window.document.querySelector(
              ".warning"
            ) as HTMLElement;

            if (title === "") {
              (
                window.document.querySelector(".warning") as HTMLElement
              ).textContent = "All fields are required!";
            } else if (url === null) {
              (
                window.document.querySelector(".warning") as HTMLElement
              ).textContent = "All fields are required!";
            } else if (categories === "") {
              warningElement.textContent = "All fields are required!";
            } else {
              Upload(
                title,
                url,
                categories,
                admin.username,
                shareStatus,
                admin.token
              );
              warningElement.style.color = "#fff";
              warningElement.style.fontWeight = "bold";
              window.setTimeout(() => {
                window.location.reload();
              }, 700 as number);
            }
          }}
        >
          Upload Photo
        </button>
        <span
          onClick={(event) => {
            event.stopPropagation();
            (
              window.document.querySelector(".upload-form") as HTMLElement
            ).style.display = "none";
          }}
        >
          <IoMdClose />
        </span>
      </form>
    </section>
  );
}

export default UploadPhotoForm;
