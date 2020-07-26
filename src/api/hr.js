import base from "./base";
import axios from "@/utils/http";

const hr = {
  org: {
    getDataTable() {
      return axios.post(base.dev + "/hr/org/getDataTable");
    },
    create(data) {
      return axios.post(base.dev + "/hr/org/create", data);
    }
  }
};

export default hr;
