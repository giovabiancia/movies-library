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

const IconWrapper = styled.button`
  position: absolute;
  top: 5px;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  cursor: ${({ clickable }) => (clickable ? "pointer" : "default")};
  border: none;
  background-color: ${({ clickable }) => (clickable ? "#fff" : "transparent")};
  transition: all 0.3s ease-in-out;
  border-radius: 50%;

  &:hover {
    background-color: ${({ clickable }) =>
      clickable ? "#f3f3f3" : "transparent"};
  }

  &:focus {
    outline: none;
  }
`;

export default function MvInput({
  inputValue,
  onChange,
  type,
  placeholder,
  disabled,
  isLoading,
}) {
  const hasInputValue = inputValue && inputValue.trim().length > 0;

  return (
    <div style={{ position: "relative" }}>
      <Input
        type={type}
        placeholder={placeholder}
        value={inputValue}
        onChange={onChange}
        disabled={disabled}
      />
      {isLoading ? (
        <MvLoader
          css={`
            position: absolute;
            top: 5px;
            right: 50px;
          `}
        />
      ) : (
        <IconWrapper clickable={hasInputValue}>
          <i className="fas fa-search"></i>
        </IconWrapper>
      )}
    </div>
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
