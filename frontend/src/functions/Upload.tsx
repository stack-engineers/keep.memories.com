// import axios from "axios";

async function Upload(
  title: string,
  file: string,
  category: string,
  admin: string,
  share: boolean
): Promise<void> {
  const request = await fetch(
    "http://localhost:3500/admin/uploaded/resources",
    {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
        Authorization: "",
      },
      body: JSON.stringify({
        title: title,
        resource: file,
        category: category,
        admin: admin,
        share: share === true ? true : "",
      }),
    }
  );

  const response = await request.json();
  console.log(response);
}

export default Upload;
