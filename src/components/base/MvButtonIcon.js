import styled, { css } from "styled-components";

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
  ${({ styleCss }) =>
    styleCss &&
    css`
      ${styleCss}
    `}
`;

export default function MvButtonIcon({ onClick, css, iconClass }) {
  return (
    <IconWrapper onClick={onClick} styleCss={css}>
      <i className={iconClass}></i>
    </IconWrapper>
  );
}
