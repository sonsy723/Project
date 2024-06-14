import React, { useState } from "react";
import styled from "styled-components";
import { Navigate, useNavigate } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import GlobalStyle from "../GlobalStyle";
import { login } from "../lib/api/auth";

const LoginH1 = styled.h1`
  font-size: 40px;
  font-weight: bold;
  color: white;
`;

const LoginForm = styled.form`
  width: 75%;
  height: 500px;
  margin: 50px auto;
  padding: 100px 20px 0px 20px;
  border-radius: 40px;
  background-color: #f5f5f5;
  display: block;
`;

const LoginLabel = styled.label`
  text-align: left;
  font-size: 18px;
  font-weight: bold;
`;

const LoginInput = styled.input`
  width: 450px;
  height: 40px;
  border-radius: 5px;
  padding-left: 20px;
  margin: auto;
  margin-left: 30px;
  margin-bottom: 30px;
  border: 0;
  border-bottom: 4px solid #aaaaaa;
  background-color: white;
`;

const LoginBtn = styled.button`
  width: 600px;
  height: 50px;
  margin: 10px auto;
  border: 0;
  border-radius: 10px;
  font-size: 15px;
  color: white;
  font-weight: bold;
  background-color: #686868;
  cursor: pointer;
`;

function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    // 유효성 검사
    if (id.length < 1) {
      alert("아이디를 작성해주세요.");
      return;
    }
    if (password.length < 1) {
      alert("비밀번호를 작성해주세요.");
      return;
    }
    try {
      // API 호출
      const response = await login(id, password);
      console.log(response);
      alert("로그인 완료");
      navigate("/");
    } catch (error) {
      alert(error.message);
      console.log(error.message);
      return;
    }
  };
  return (
    <div>
      <LoginH1>LOGIN</LoginH1>
      <LoginForm onSubmit={handleLogin}>
        <div>
          <LoginLabel>아이디</LoginLabel>
          <LoginInput
            type="text"
            placeholder="아이디"
            value={id}
            onChange={(e) => {
              setId(e.target.value);
            }}
          />
        </div>
        <div>
          <LoginLabel>비밀번호</LoginLabel>
          <LoginInput
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <LoginBtn type="submit">로그인</LoginBtn>
        <LoginBtn
          onClick={() => {
            navigate("/signup");
          }}
        >
          회원가입
        </LoginBtn>
      </LoginForm>
    </div>
  );
}

export default Login;
