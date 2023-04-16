import React from "react";
import MvCol from "../base/MvCol";
import MvTitle from "../base/MvTitle";
import MvFeatureList from "../base/MvFeatureList";

export default function DescriptionFeauture({ name, genres, summary }) {
  return (
    <>
      <MvCol
        css={`
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex: 0 0 100%;
          max-width: 100%;
        `}
      >
        <MvTitle>{name}</MvTitle>
        <MvFeatureList
          css={`
            font-weight: 600;
          `}
          features={genres}
        ></MvFeatureList>
      </MvCol>
      <MvCol
        css={`
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex: 0 0 100%;
          max-width: 100%;
        `}
      >
        <div dangerouslySetInnerHTML={{ __html: summary }} />
      </MvCol>
    </>
  );
}
