import request from "@/utils/http";

// 查询用户
export function list(query) {
  return request({
    url: "/sys/user",
    method: "get",
    params: query
  });
}
