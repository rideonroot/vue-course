import Axios from "axios";
import { BASE_URL } from "./constants";

const axios = new Axios.create({ baseURL: BASE_URL });

axios.interceptors.response.use(
  (response) => response.data,
  ({ response }) => Promise.reject(response.data)
);

export default axios;
