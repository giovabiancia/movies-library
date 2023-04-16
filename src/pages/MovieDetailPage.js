import React, { useEffect, useState } from "react";
import MvBackgroundImageContainer from "./../components/base/MvBackgroundImageContainer";
import MvButtonIcon from "./../components/base/MvButtonIcon";
import { useNavigate, useParams } from "react-router-dom";
import { useMovie } from "../hooks/useMovie";
import MvRow from "../components/base/MvRow";
import MvCol from "../components/base/MvCol";
import TimeFeature from "../components/movie/TimeFeature";
import RatingFeature from "../components/movie/RatingFeature";
import DescriptionFeauture from "../components/movie/DescriptionFeauture";
import CastTable from "../components/movie/CastTable";

export default function MovieDetailPage(props) {
  const navigate = useNavigate();
  const { id } = useParams();
  const { getMovieDetails } = useMovie();
  const [singleMovie, setSingleMovie] = useState(null);

  useEffect(() => {
    getMovieDetails(id)
      .then((response) => {
        if (response.status === 200) {
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
        <div className="overlay"></div>
        <MvButtonIcon
          onClick={handleGoHome}
          iconClass={"fa fa-arrow-left fa-lg  "}
          css={`
            margin: 20px;
            cursor: pointer;
            position:absolute;
            z-index:1;
            color: white;
            opacity: 0.6;
            &:hover {
              background-color:#e7e7e7;
              border-radius: 50%;

          `}
        ></MvButtonIcon>
      </MvBackgroundImageContainer>
      <MvRow>
        <TimeFeature singleMovie={singleMovie}></TimeFeature>
        <RatingFeature rating={singleMovie?.rating?.average}></RatingFeature>
      </MvRow>
      <MvRow
        css={`
          padding: 20px;
        `}
      >
        <DescriptionFeauture
          name={singleMovie?.name}
          genres={singleMovie?.genres}
          summary={singleMovie?.summary}
        ></DescriptionFeauture>
        <MvCol
          css={`
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex: 0 0 100%;
            max-width: 100%;
          `}
        >
          <CastTable id={id}></CastTable>
        </MvCol>
      </MvRow>
    </div>
  );
}
