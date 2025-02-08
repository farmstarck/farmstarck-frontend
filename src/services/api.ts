import axios from "axios";
import Config from "../config.json";

const Api = () => {
  return axios.create({
    //baseURL: process.env.REACT_APP_REODA_SERVICE,
    baseURL: Config.REACT_APP_FARMSTARCK_SERVICE,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};

export default Api;
