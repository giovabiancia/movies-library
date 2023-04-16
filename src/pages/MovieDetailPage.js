import React from "react";
import MvBackgroundImageContainer from "./../components/base/MvBackgroundImageContainer";
import MvButtonIcon from "./../components/base/MvButtonIcon";

export default function MovieDetailPage() {
  const handleGoHome = () => {};
  return (
    <div>
      <MvBackgroundImageContainer
        imageUrl={
          "https://poe.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FpurpleAvatar.d066304c.png&w=48&q=75"
        }
      >
        <MvButtonIcon
          onClick={handleGoHome}
          iconClass={"fa fa-arrow-left fa-lg  "}
          css={`
            margin: 20px;
          `}
        ></MvButtonIcon>
      </MvBackgroundImageContainer>
    </div>
  );
}
