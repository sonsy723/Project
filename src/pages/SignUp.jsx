import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { register } from "../lib/api/auth";

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

export default function SignUp() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const navigate = useNavigate();
  const handleRegister = async () => {
    // 유효성 검사
    if (id.length < 4 || id.length > 10) {
      alert("아이디는 4글자 이상, 10글자 이하로 작성해주세요.");
      return;
    }
    if (password.length < 4 || password.length > 10) {
      alert("비밀번호는 4글자 이상, 15글자 이하로 작성해주세요.");
      return;
    }
    if (nickname.length < 1 || nickname.length > 10) {
      alert("닉네임은 1글자 이상, 10글자 이하로 작성해주세요.");
      return;
    }
    try {
      // API 호출
      const response = await register(id, password, nickname);
      alert(response.data.message);
    } catch (error) {
      alert(error);
      return;
    }

    // 회원가입 되면 로그인 페이지로 이동
    navigate("/login");
  };

  return (
    <div>
      <LoginH1>SIGN UP</LoginH1>
      <LoginForm
      // onSubmit={(e) => {
      //   e.preventDefault();
      //   response();
      // }}
      >
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
        <div>
          <LoginLabel>닉네임</LoginLabel>
          <LoginInput
            type="text"
            placeholder="닉네임"
            value={nickname}
            onChange={(e) => {
              setNickname(e.target.value);
            }}
          />
        </div>
        <LoginBtn
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            handleRegister();
          }}
        >
          회원가입
        </LoginBtn>
        <LoginBtn
          onClick={() => {
            navigate("/login");
          }}
        >
          로그인
        </LoginBtn>
      </LoginForm>
    </div>
  );
}
