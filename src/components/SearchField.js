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
  const [loading, setLoading] = useState(false);

  const { searchMovieListByWord } = useMovie();
  const { setMovies } = useContext(MovieContext);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSearchClick = () => {
    setLoading(true);
    searchMovieListByWord(inputValue)
      .then((response) => {
        setLoading(false);
        if (response.status === 200) {
          setMovies(response.data);
        }
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  return (
    <InputContainer>
      <MvInput
        isLoading={loading}
        onChange={handleInputChange}
        value={inputValue}
        onKeyPress={() => handleSearchClick()}
      ></MvInput>
    </InputContainer>
  );
};

export default SearchField;
