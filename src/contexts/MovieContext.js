import React, { createContext, useEffect, useState } from "react";
export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [loading, setLoading] = useState(true);
  const [showError, setshowError] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    //TODO prima chiamata che popola i film iniziali
  }, []);

  return (
    <MovieContext.Provider value={(movies, setMovies)}>
      {props.children}
    </MovieContext.Provider>
  );
};
