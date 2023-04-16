import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const StyledLoader = styled.div`
  border: 5px solid #f3f3f3;
  border-top: 5px solid #3498db;
  border-radius: 50%;
  width: ${({ pxSize }) => `${pxSize}px`};
  height: ${({ pxSize }) => `${pxSize}px`};
  animation: spin 2s linear infinite;
  border-color: rgb(99, 102, 106) rgb(243, 243, 243) rgb(243, 243, 243);

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  ${({ styleCss }) =>
    styleCss &&
    css`
      ${styleCss}
    `}
`;

export default function MvLoader({ pxSize, css }) {
  return <StyledLoader pxSize={pxSize} styleCss={css} />;
}
MvLoader.propTypes = {
  custom: PropTypes.string,
  pxSize: PropTypes.number,
};

MvLoader.defaultProps = {
  pxSize: 20,
};
