import React, { useState } from "react";
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
  background-color: ${({ clickable }) =>
    clickable ? "#d3d3d3" : "transparent"};
  transition: all 0.3s ease-in-out;
  border-radius: 50%;

  &:hover {
    background-color: ${({ clickable }) =>
      clickable ? "#f3f3f3" : "transparent"};
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
        <IconWrapper clickable={hasInputValue} onClick={onKeyPress}>
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
