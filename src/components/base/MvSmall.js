import React from "react";
import styled, { css } from "styled-components";

const SmallWrapper = styled.div`
  font-size: 10px;
  color: #888;
  ${({ styleCss }) =>
    styleCss &&
    css`
      ${styleCss}
    `}
`;

export default function MvSmall({ children, css }) {
  return <SmallWrapper styleCss={css}>{children}</SmallWrapper>;
}
