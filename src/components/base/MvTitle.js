import React from "react";
import styled, { css } from "styled-components";

const TitleWrapper = styled.div`
  font-size: 30px;
  font-weight: 600;
  color: #080808;
  ${({ styleCss }) =>
    styleCss &&
    css`
      ${styleCss}
    `}
`;

export default function MvTitle({ children, css }) {
  return <TitleWrapper styleCss={css}>{children}</TitleWrapper>;
}
