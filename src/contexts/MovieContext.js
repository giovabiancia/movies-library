import React, { createContext, useEffect, useState } from "react";
export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    //TODO prima chiamata che popola i film iniziali
  }, []);

  return (
    <MovieContext.Provider
      value={{ movies, setMovies, loading, setLoading, error, setError }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};
