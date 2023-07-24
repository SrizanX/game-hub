import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "04ef30dee6f34dcfabf9f09ee36b4f84",
  },
});
