import React from "react";
import styled, { css } from "styled-components";

const ColLayout = styled.div`
  box-sizing: border-box;
  padding-right: 15px;
  padding-left: 15px;
  width: 100%;
  min-height: 1px;
  position: relative;

  @media (min-width: 768px) {
    float: left;
    width: 33.33333333%;
  }

  @media (max-width: 767px) {
    width: 50%;
    &:nth-child(odd) {
      margin-right: 0;
    }
  }
  }
  ${({ styleCss }) =>
    styleCss &&
    css`
      ${styleCss}
    `}
`;

export default function MvCol({ css, children }) {
  return <ColLayout styleCss={css}>{children}</ColLayout>;
}
