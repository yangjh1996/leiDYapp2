import request from "./requestUtil";

export const getVideoList = () => {
  return request({
    method: "GET",
    url: "/api/thing/list?sort=recommend",
  });
};

export function fetchLogin(username, password) {
  return request({
    method: "POST",
    url: "/api/user/userLogin",
    data: {
      username,
      password,
    },
  });
}

export function getUserInfo(userId) {
  return request({
    method: "GET",
    url: "/api/user/detail?userId=" + userId,
  });
}

export const fetchUpdateUserInfo = (data) => {
  const { id, nickname, email, mobile, description } = data;
  return request({
    method: "POST",
    url: "/api/user/updateUserInfo",
    data: { id: +id, nickname, email, mobile, description },
  });
};

export function fetchRegister(data) {
  return request({
    method: "POST",
    url: "/api/user/userRegister",
    data,
  });
}