import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const FeatureWrapper = styled.div`
  font-size: 10px;
  color: #888;
`;

const getCustomFeature = (css) =>
  styled(FeatureWrapper)`
    ${css}
  `;

export default function MvFeatureList({ features, css, slice }) {
  if (!features) return;
  const Feature = css ? getCustomFeature(css) : FeatureWrapper;

  return (
    <div className="MvCenter">
      {features.map((feature, index) => (
        <React.Fragment key={index}>
          {index !== 0 && <span className="separator">{" \u00B7 "}</span>}
          <Feature>{slice ? feature.slice(0, slice) : feature}</Feature>
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
