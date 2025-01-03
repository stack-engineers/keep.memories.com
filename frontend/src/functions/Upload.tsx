import adminContext from "../context/adminContext";
import React from "react";

type Admin = string;

async function Upload(
  title: string,
  file: string,
  category: string,
  admin: string,
  share: boolean
): Promise<void> {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const context: Admin = React.useContext(adminContext) as Admin;
  const current_admin = JSON.parse(context);

  const request = await fetch(
    "http://localhost:3500/admin/uploaded/resources",
    {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
        Authorization: current_admin.token ? current_admin.token : "",
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
