import request from "@/utils/http";

// 查询用户
export function login(data) {
  return request({
    url: "/sys/login",
    method: "post",
    params: data
  });
}
