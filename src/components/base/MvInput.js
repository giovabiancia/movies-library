import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import MvLoader from "./MvLoader";

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  width: 300px;
`;

export default function MvInput({
  inputValue,
  onChange,
  type,
  placeholder,
  disabled,
  isLoading,
}) {
  return (
    <>
      <Input
        type={type}
        placeholder={placeholder}
        value={inputValue}
        onChange={onChange}
        disabled={disabled}
      />
      {isLoading && <MvLoader></MvLoader>}
    </>
  );
}

MvInput.propTypes = {
  inputValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
};

MvInput.defaultProps = {
  inputValue: null,
  onChange: () => console.error("MvInput: Definisci una funzione onChange"),
  type: "text",
  placeholder: "placeholder",
  disabled: false,
  isLoading: false,
};
