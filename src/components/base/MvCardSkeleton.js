import React from "react";
import styled from "styled-components";

const SkeletonCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  overflow: hidden;
  background-color: #f5f5f5;
`;

const SkeletonCardImage = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 75%;
  background-color: #ddd;
  border-radius: 5%;
`;

const SkeletonCardTitle = styled.div`
  width: 50%;
  height: 10px;
  margin-top: 10px;
  background-color: #ddd;
  border-radius: 5px;
`;

const SkeletonCardDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  color: #888;
  margin-top: 5px;
`;

const SkeletonCardDetail = styled.span`
  font-size: 10px;
  margin-right: 5px;
  height: 10px;
  background-color: #ddd;
  border-radius: 5px;
`;

export default function MvCardSkeleton() {
  return (
    <SkeletonCardContainer>
      <SkeletonCardImage />
      <SkeletonCardTitle />
      <SkeletonCardDetails>
        <SkeletonCardDetail />
        <SkeletonCardDetail />
        <SkeletonCardDetail />
      </SkeletonCardDetails>
    </SkeletonCardContainer>
  );
}
