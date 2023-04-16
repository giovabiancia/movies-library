import React from "react";
import MvCol from "../base/MvCol";
import MvButtonIcon from "../base/MvButtonIcon";
import MvSmall from "../base/MvSmall";

export default function RatingFeature({ rating }) {
  return (
    <MvCol
      css={`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        border: 1px solid lightgray;
        flex: 0 0 50%;
        max-width: 50%;
        padding-top: 20px;
        padding-bottom: 20px;
      `}
    >
      {rating && (
        <>
          <MvButtonIcon
            css={`
              color: #888;
            `}
            iconClass="fa fa-star fa-xl"
          ></MvButtonIcon>

          <div className="MvCenter">
            <MvSmall>{rating}</MvSmall>
          </div>
        </>
      )}
      {!rating && (
        <>
          <MvButtonIcon
            css={`
              color: #888;
            `}
            iconClass="fa fa-star-o fa-xl"
          ></MvButtonIcon>

          <div className="MvCenter">
            <MvSmall>No Rating</MvSmall>
          </div>
        </>
      )}
    </MvCol>
  );
}
