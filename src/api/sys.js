import base from "./base";
import axios from "@/utils/http";

const sys = {
  user: {
    list() {
      return axios.post(base.dev + "/sys/user/list");
    },
    login(data) {
      return axios.post(base.dev + "/sys/user/login", data);
    }
  }
};

export default sys;
