import React from "react";
import styled from "styled-components";
import { useEffect } from "react";

const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
`;
const InputGroup = styled.div`
  margin-bottom: 15px;
  label {
    display: block;
    margin-bottom: 5px;
  }
  input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
  }
`;
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 10px;
`;
function Profile() {
  return (
    <Container>
      <h2>프로필 수정</h2>
      <InputGroup>
        <label htmlFor="nickname">닉네임</label>
        <input type="text" placeholder="닉네임" minLength="1" maxLength="10" />
      </InputGroup>
      <InputGroup>
        <label htmlFor="nickname">아바타</label>
        <input type="file" accept="image/*" />
      </InputGroup>
      <Button>업데이트</Button>
    </Container>
  );
}

export default Profile;
