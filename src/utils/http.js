import axios from "axios";
import base from "@/api/base";

axios.defaults.headers["Content-type"] = "application/json;charset=utf-8";

// 创建axios实例
const serivce = axios.create({
  baseURL: base.dev,
  timeout: 10000
});

// response拦截器
serivce.interceptors.response.use(
  res => {
    console.log(res);
    return res;
  },
  error => {
    console.log(error);
    Promise.reject(error);
  }
);

export default serivce;
