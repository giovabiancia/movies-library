import React from "react";
import styled from "styled-components";

const FullWidthContainer = styled.div`
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 30vh;
  position: relative;
`;

const MvBackgroundImageContainer = ({ imageUrl, children }) => {
  return (
    <FullWidthContainer imageUrl={imageUrl}>{children}</FullWidthContainer>
  );
};

export default MvBackgroundImageContainer;
