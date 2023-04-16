import React, { useEffect, useState } from "react";
import MvBackgroundImageContainer from "./../components/base/MvBackgroundImageContainer";
import MvButtonIcon from "./../components/base/MvButtonIcon";
import { useNavigate, useParams } from "react-router-dom";
import { useMovie } from "../hooks/useMovie";
import MvRow from "../components/base/MvRow";
import MvCol from "../components/base/MvCol";

export default function MovieDetailPage(props) {
  const navigate = useNavigate();
  const { id } = useParams();
  const { getMovieDetails } = useMovie();
  const [singleMovie, setSingleMovie] = useState(null);

  useEffect(() => {
    getMovieDetails(id)
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data);
          setSingleMovie(response.data);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  function handleGoHome() {
    navigate("/");
  }
  return (
    <div>
      <MvBackgroundImageContainer imageUrl={singleMovie?.image?.medium}>
        <MvButtonIcon
          onClick={handleGoHome}
          iconClass={"fa fa-arrow-left fa-lg  "}
          css={`
            margin: 20px;
            cursor: pointer;
            &:hover {
              background-color:#e7e7e7;
              border-radius: 50%;

          `}
        ></MvButtonIcon>
      </MvBackgroundImageContainer>
      <MvRow>
        <MvCol
          css={`
            display: flex;
            justify-content: center;
            border: 1px solid lightgray;
            flex: 0 0 50%;
            max-width: 50%;
          `}
        >
          <MvButtonIcon iconClass="fa fa-calendar-o"></MvButtonIcon>
        </MvCol>
        <MvCol
          css={`
            display: flex;
            justify-content: center;
            border: 1px solid lightgray;
            flex: 0 0 50%;
            max-width: 50%;
          `}
        >
          <h2>{id}</h2>
        </MvCol>
      </MvRow>
    </div>
  );
}
