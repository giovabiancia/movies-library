import React, { useContext, useState } from "react";
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
  const [inputValue, setInputValue] = useState("");

  const { getMovieListByWord } = useMovie();
  const { setMovies, loading, setLoading, setError } = useContext(MovieContext);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSearchClick = () => {
    setLoading(true);
    getMovieListByWord(inputValue)
      .then((response) => {
        setLoading(false);
        if (response.status === 200) {
          console.log(response.data);
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
        value={inputValue}
        onKeyPress={() => handleSearchClick()}
      ></MvInput>
    </InputContainer>
  );
};

export default SearchField;
