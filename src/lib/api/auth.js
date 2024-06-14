import axios from "axios";

const AUTH_API_HOST = "https://moneyfulpublicpolicy.co.kr";

export const register = async (id, password, nickname) => {
  const response = await axios.post(`${AUTH_API_HOST}/register`, {
    id: id,
    password: password,
    nickname: nickname,
  });
  return response;
};

export const login = async (id, password) => {
  const response = await axios.post(`${AUTH_API_HOST}/login?expiresIn=10m`, {
    id: id,
    password: password,
  });
  console.log(response);
  localStorage.setItem("accessToken", response.data.accessToken);
  return response.data;
};

export const getUserInfo = async () => {
  const accessToken = localStorage.getItem("accessToken");
  console.log(accessToken);
  if (accessToken) {
    try {
      const response = await axios.get(`${AUTH_API_HOST}/user`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return response.data;
    } catch (error) {
      console.log(error);
      alert("토큰이 만료됨");
      localStorage.clear();
    }
  }
};
