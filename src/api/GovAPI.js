import axios from "axios";

const BASE_URL = "https://api-open.data.gov.sg/v1/public/api/datasets/";

const GovAPI = axios.create({
  baseURL: BASE_URL,
});

export default GovAPI;
