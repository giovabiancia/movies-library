import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export default function MvLoader({ pxSize, css }) {
  const StyledLoader = styled.div`
    border: 5px solid #f3f3f3;
    border-top: 5px solid #3498db;
    border-radius: 50%;
    width: ${pxSize}px;
    height: ${pxSize}px;
    animation: spin 2s linear infinite;

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `;
  const CustomStyledLoader = styled(StyledLoader)`
    ${css}
  `;

  const Loader = css ? CustomStyledLoader : StyledLoader;

  return <Loader />;
}
MvLoader.propTypes = {
  custom: PropTypes.string,
  pxSize: PropTypes.number,
};

MvLoader.defaultProps = {
  pxSize: 20,
};
