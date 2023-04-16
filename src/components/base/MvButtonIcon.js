import React from "react";
import styled from "styled-components";

const IconWrapper = styled.button`
  position: absolute;
  top: 5px;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  cursor: "pointer";
  border: none;
  background-color: "#d3d3d3";
  transition: all 0.3s ease-in-out;
  border-radius: 50%;

  &:hover {
    background-color: "transparent";
    border-radius: 50%;
  }

  &:focus {
    outline: none;
  }
`;

export default function MvButtonIcon({ onClick, css, iconClass }) {
  const CustomIconWrapper = styled(IconWrapper)`
    ${css}
  `;

  const ButtonIcon = css ? CustomIconWrapper : IconWrapper;

  return (
    <ButtonIcon onClick={onClick}>
      <i className={iconClass}></i>
    </ButtonIcon>
  );
}
