import React from "react";
import styled from "styled-components";
import defaultImage from "../../imgs/movieDefault.png";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  overflow: hidden;
`;

const CardImage = styled.img`
  width: 100%;
  max-width: 400px;
  border-radius: 5%;

  object-fit: cover;
  transition: box-shadow 0.2s;

  cursor: pointer;

  @media (min-width: 768px) {
    height: 350px;
  }
  @media (max-width: 768px) {
    height: 200px;
  }

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 10px;
  }
`;

const CardTitle = styled.h2`
  color: black;
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 2px;
`;

const CardDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  color: #888;
`;

const CardDetail = styled.span`
  font-size: 10px;
  margin-right: 5px;
`;

export default function MvCard({ image, title, category, year, country }) {
  return (
    <CardContainer>
      <CardImage src={image ? image : defaultImage} alt={title} />
      <CardTitle>{title}</CardTitle>
      <CardDetails>
        <CardDetail>{category}</CardDetail>
        {year && <CardDetail>{`\u00B7 ${year.slice(0, 4)}`}</CardDetail>}
        {country && <CardDetail>{`\u00B7 ${country}`}</CardDetail>}
      </CardDetails>
    </CardContainer>
  );
}
