import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.unsplash.com",
});
export default instance;
//https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY
