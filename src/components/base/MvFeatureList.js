import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const FeatureWrapper = styled.div`
  font-size: 10px;
  color: #888;
  ${({ styleCss }) =>
    styleCss &&
    css`
      ${styleCss}
    `}
`;

export default function MvFeatureList({ features, css, slice }) {
  if (!features) return;

  return (
    <div className="MvCenter">
      {features.map((feature, index) => (
        <React.Fragment key={index}>
          {index !== 0 && <span className="separator">{" \u00B7 "}</span>}
          <FeatureWrapper styleCss={css}>
            {slice ? feature.slice(0, slice) : feature}
          </FeatureWrapper>
        </React.Fragment>
      ))}
    </div>
  );
}

MvFeatureList.propTypes = {
  features: PropTypes.arrayOf(PropTypes.string),
  css: PropTypes.string,
  slice: PropTypes.number,
};

MvFeatureList.defaultProps = {
  features: [],
  css: null,
  slice: null,
};
