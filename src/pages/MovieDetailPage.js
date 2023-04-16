import React from "react";
import MvNavBar from "../components/base/MvNavBar";
import MvBackgroundImageContainer from "./../components/base/MvBackgroundImageContainer";

export default function MovieDetailPage() {
  return (
    <div>
      <MvBackgroundImageContainer
        imageUrl={
          "https://poe.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FpurpleAvatar.d066304c.png&w=48&q=75"
        }
      ></MvBackgroundImageContainer>
    </div>
  );
}
