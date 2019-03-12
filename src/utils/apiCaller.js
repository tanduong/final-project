import axios from "axios";
import * as Config from "../constants/Config";
export default function callApi(method, query) {
  return axios({
    method: method,
    url: Config.API_URL,
    data: {
      query: query
    }
  }).catch(err => {
    console.log(err);
  });
}
