import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/clone-a469f/us-central1/api", // THE API {Cloud function url} URL
});

export default instance;
