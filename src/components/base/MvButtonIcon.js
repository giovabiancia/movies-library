import React from "react";
import styled from "styled-components";

const IconWrapper = styled.button`
  height: 30px;
  width: 30px;
  cursor: "pointer";
  border: none;
  background-color: transparent;
  transition: all 0.3s ease-in-out;
  border-radius: 50%;

  &:focus {
    outline: none;
  }
`;

const getCustomIconWrapper = (css) =>
  styled(IconWrapper)`
    ${css}
  `;

export default function MvButtonIcon({ onClick, css, iconClass }) {
  const ButtonIcon = css ? getCustomIconWrapper(css) : IconWrapper;

  return (
    <ButtonIcon onClick={onClick}>
      <i className={iconClass}></i>
    </ButtonIcon>
  );
}
