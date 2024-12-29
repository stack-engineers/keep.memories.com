import axios from "axios";

async function Delete(id: string): Promise<void> {
  const request = await axios.delete(
    `http://localhost:3500/admin/uploaded/resources/${id}`,
    {
      headers: {
        "Content-Type": "Application/json",
        Authorization: "",
      },
    }
  );

  const response = await request.data;
  console.log(response);
}

export default Delete;
