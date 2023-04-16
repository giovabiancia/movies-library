import React from "react";
import styled, { css } from "styled-components";

const RowLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -10px;
  margin-left: -10px;
  ${({ styleCss }) =>
    styleCss &&
    css`
      ${styleCss}
    `}
`;

export default function MvRow({ css, children }) {
  return <RowLayout styleCss={css}>{children}</RowLayout>;
}
