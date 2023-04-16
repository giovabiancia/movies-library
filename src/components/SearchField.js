import React, { useContext, useState, useMemo } from "react";
import styled from "styled-components";
import MvInput from "./base/MvInput";
import { useMovie } from "../hooks/useMovie";
import { MovieContext } from "../contexts/MovieContext";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SearchField = () => {
  const { getMovieListByWord } = useMovie();
  const { setMovies, loading, setLoading, setError, query, setQuery } =
    useContext(MovieContext);

  const memoizedInputValue = useMemo(() => query, [query]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearchClick = () => {
    setLoading(true);
    getMovieListByWord(memoizedInputValue)
      .then((response) => {
        setLoading(false);
        if (response.status === 200) {
          setMovies(response.data);
        }
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
        setLoading(false);
      });
  };

  return (
    <InputContainer>
      <MvInput
        placeholder="Search"
        isLoading={loading}
        onChange={handleInputChange}
        inputValue={query}
        onKeyPress={() => handleSearchClick()}
      ></MvInput>
    </InputContainer>
  );
};

export default SearchField;
