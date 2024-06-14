import React, { useEffect } from "react";
import styled from "styled-components";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { getUserInfo } from "../lib/api/auth";

const Navbar = styled.nav`
  background-color: #333;
  color: white;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: calc(100% - 2rem);
  top: 0;
  z-index: 1000;
  max-width: 1240px;
`;
const NavItems = styled.div`
  display: flex;
  align-items: center;
`;
const NavItem = styled(Link)`
  color: white;
  margin: 0 10px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
const UserProfile = styled.div`
  display: flex;
  align-items: center;
`;
const UserAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;
const UserName = styled.span`
  color: white;
  margin-right: 20px;
`;
const LogoutBtn = styled.button`
  padding: 8px 12px;
  background-color: #ff4d4d;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
const PageContainer = styled.div`
  padding: 6rem 2rem; /* Navbar height */
`;

function Layout({ user, setUser }) {
  const navigate = useNavigate();
  useEffect(() => {
    getUserInfo().then((res) => {
      if (res) {
        setUser({
          setId: res.id,
          nickname: res.nickname,
          avatar: res.avatar,
        });
      } else {
        handleLogout();
      }
    });
  }, []);

  const handleLogout = () => {
    setUser(null);
    navigate("/login");
    localStorage.clear();
  };
  return (
    <>
      <Navbar>
        <NavItems>
          <NavItem to="/">HOME</NavItem>
          <NavItem>내 프로필</NavItem>
        </NavItems>
        <UserProfile>
          {user && (
            <>
              <UserAvatar src={user.avatar} alt="User avatar" />
              <UserName>{user.nickname}</UserName>
            </>
          )}
        </UserProfile>
        <LogoutBtn onClick={handleLogout}>로그아웃</LogoutBtn>
      </Navbar>
      <PageContainer>
        <Outlet />
      </PageContainer>
    </>
  );
}

export default Layout;
