import React, { createContext, useEffect, useState } from "react";
import { useMovie } from "../hooks/useMovie";
export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [query, setQuery] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movies, setMovies] = useState([]);
  const { getMovieListByWord } = useMovie();

  useEffect(() => {
    //TODO prima chiamata che popola i film iniziali
    /*  getMovieListByWord().then((result) => {
      console.log(result);
    }); */
  }, []);

  return (
    <MovieContext.Provider
      value={{
        movies,
        setMovies,
        loading,
        setLoading,
        error,
        setError,
        query,
        setQuery,
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};
