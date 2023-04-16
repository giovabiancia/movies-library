import React, { useContext } from "react";
import MvNavBar from "../components/base/MvNavBar";
import SearchField from "../components/SearchField";
import { MovieContext } from "../contexts/MovieContext";
import MvCard from "../components/base/MvCard";
import MvRow from "../components/base/MvRow";
import MvCol from "../components/base/MvCol";
import MvCardSkeleton from "../components/base/MvCardSkeleton";
import { Link } from "react-router-dom";

export default function MovieListPage() {
  const { movies, loading } = useContext(MovieContext);
  return (
    <>
      <MvNavBar>
        <SearchField></SearchField>
      </MvNavBar>

      <MvRow
        css={`
          margin-top: 100px;
        `}
      >
        {loading &&
          (() => {
            const skeletonCards = [];
            for (let i = 0; i < 6; i++) {
              skeletonCards.push(
                <MvCol key={i}>
                  <MvCardSkeleton />
                </MvCol>
              );
            }
            return skeletonCards;
          })()}
        {!loading &&
          movies.map((movie, i) => (
            <MvCol key={i}>
              <Link
                to={"/movie/" + movie?.show?.id}
                style={{ textDecoration: "none" }}
              >
                <MvCard
                  title={movie?.show?.name}
                  image={movie?.show?.image?.medium}
                  category={movie?.show?.type}
                  year={movie?.show?.ended}
                  country={movie?.show?.network?.country?.code}
                ></MvCard>
              </Link>
            </MvCol>
          ))}
      </MvRow>
    </>
  );
}
