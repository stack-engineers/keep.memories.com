import axios from "axios";

async function useSearch() {
  const request = await axios.get("http://localhost:3500/resources", {
    headers: {
      Authorization: "",
    },
  });

  const response = await request.data;
  console.log(response);
}

export default useSearch;
