import React, { useState } from "react";
import styled from "styled-components";
import MvInput from "./base/MvInput";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Loader = styled.div`
  border: 5px solid #f3f3f3;
  border-top: 5px solid #3498db;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const SearchResult = styled.div`
  margin-top: 20px;
  font-size: 18px;
`;

const SearchField = () => {
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSearchClick = () => {
    setLoading(true);
    fetch(`https://api.tvmaze.com/search/shows?q=${inputValue}`)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setSearchResults(data);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  return (
    <InputContainer>
      <MvInput></MvInput>
      <button onClick={handleSearchClick}>Search</button>
      {loading && <Loader />}
      {searchResults.length > 0 &&
        searchResults.map((result) => (
          <SearchResult key={result.show.id}>{result.show.name}</SearchResult>
        ))}
    </InputContainer>
  );
};

export default SearchField;
