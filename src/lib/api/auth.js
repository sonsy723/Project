import axios from "axios";

const AUTH_API_HOST = "https://moneyfulpublicpolicy.co.kr";

export const register = async (id, password, nickname) => {
  const response = await axios.post(`${AUTH_API_HOST}/register`, {
    id: id,
    password: password,
    nickname: nickname,
  });
  return response;
  console.log(response);
};

export const login = async (id, password) => {
  const response = await axios.post(`${AUTH_API_HOST}/login?expiresIn=10m`, {
    id: id,
    password: password,
  });
  localStorage.setItem("accessToken", response.data.accessToken);
  return response.data;
  console.log(response.data);
};
