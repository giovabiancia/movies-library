import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
  padding: 20px 0px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  z-index: 2;
`;

export default function MvNavBar({ children }) {
  return <Nav>{children}</Nav>;
}
