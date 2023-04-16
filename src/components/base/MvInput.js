import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import MvLoader from "./MvLoader";
import MvButtonIcon from "./MvButtonIcon";

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  max-width: 300px;
  background-color: ${({ isWriting }) =>
    isWriting ? "transparent" : "#e7e7e7"};
  transition: all 0.3s ease-in-out;
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
  cursor: ${({ isWriting }) => (isWriting ? "pointer" : "default")};
  border: none;
  background-color: ${({ isWriting }) =>
    isWriting ? "transparent" : "#e7e7e7"};
  transition: all 0.3s ease-in-out;
  border-radius: 50%;

  &:hover {
    background-color: ${({ isWriting }) =>
      isWriting ? "#e7e7e7" : "transparent"};
    border-radius: 50%;
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
  handleSubmit,
  onKeyPress,
}) {
  const [value, setValue] = useState(inputValue || "");
  const hasInputValue = value && value.length > 0;

  const handleChange = (event) => {
    setValue(event.target.value);
    onChange(event);
  };

  return (
    <div style={{ position: "relative" }}>
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        disabled={disabled}
        onKeyDown={(e) => e.key === "Enter" && onKeyPress()}
        isWriting={hasInputValue}
      />
      {isLoading ? (
        <MvLoader
          css={`
            position: absolute;
            top: 8px;
            right: 10px;
          `}
          pxSize={15}
        />
      ) : (
        <MvButtonIcon
          css={`cursor:
            ${hasInputValue ? "pointer" : "default"};
            border: none;
            background-color:
              ${hasInputValue ? "transparent" : "#e7e7e7"};
            transition: all 0.3s ease-in-out;
            border-radius: 50%;

            &:hover {
              background-color:
                ${hasInputValue ? "#e7e7e7" : "transparent"};
              border-radius: 50%;`}
          onClick={onKeyPress}
          iconClass="fas fa-search"
        ></MvButtonIcon>
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
  handleSubmit: PropTypes.func,
  onKeyPress: PropTypes.func,
};

MvInput.defaultProps = {
  inputValue: null,
  onChange: () => console.error("MvInput: Definisci una funzione onChange"),
  type: "text",
  placeholder: "placeholder",
  disabled: false,
  isLoading: false,
  handleSubmit: () => console.warn("Definire un handle submit"),
  onKeyPress: () => console.warn("Definire un handle submit"),
};
