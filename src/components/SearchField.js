import React, { useState } from "react";
import styled from "styled-components";
import MvInput from "./base/MvInput";
import { useMovie } from "../hooks/useMovie";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SearchField = () => {
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);

  const { searchMovieListByWord } = useMovie();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSearchClick = () => {
    setLoading(true);
    searchMovieListByWord(inputValue)
      .then((response) => {
        setLoading(false);
        if (response.status === 200) {
          console.log(response);
          //TODO setta nel contesto i risultati
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
