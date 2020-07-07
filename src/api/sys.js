import base from "./base";
import axios from "@/utils/http";

const sys = {
  user: {
    list() {
      return axios.post(base.dev + "/sys/user/list");
    }
  }
};

export default sys;
