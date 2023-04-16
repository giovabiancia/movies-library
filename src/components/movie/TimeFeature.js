import React from "react";
import MvCol from "../base/MvCol";
import MvButtonIcon from "../base/MvButtonIcon";
import MvFeatureList from "../base/MvFeatureList";
import MvSmall from "../base/MvSmall";

export default function TimeFeature({ singleMovie }) {
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
      <MvButtonIcon
        css={`
          color: #888;
        `}
        iconClass="fa fa-calendar-o fa-xl"
      ></MvButtonIcon>

      <div className="MvCenter">
        <MvFeatureList
          features={singleMovie?.schedule?.days}
          slice={3}
        ></MvFeatureList>

        {singleMovie?.schedule?.time && (
          <>
            <MvSmall
              css={`
                margin-left: 2px;
                margin-right: 2px;
              `}
            >
              -
            </MvSmall>

            <MvSmall>{singleMovie?.schedule?.time}</MvSmall>
          </>
        )}
      </div>
    </MvCol>
  );
}
