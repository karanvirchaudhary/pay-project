import React, { useState } from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 350px;
  margin-bottom: 24px;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 12px;
  padding-top: 24px; /* Space for label */
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 4px;
  outline: none;
  text-align: center; /* Center placeholder */
  transition: border-color 0.3s;

  &::placeholder {
    color: transparent; /* Hide placeholder */
  }

  &:focus {
    border-color: #ff9800; /* Highlight input */
  }
`;

const FloatingLabel = styled.label<{ isFloating: boolean }>`
  position: absolute;
  left: 50%;
  bottom: 8px; /* Adjust to be right under the border */
  transform: translateX(-50%);
  font-size: 14px;
  color: #ff9800;
  transition: all 0.3s ease-in-out;
  opacity: ${({ isFloating }) => (isFloating ? "1" : "0")};
`;

interface InputFieldProps<T> {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (key: keyof<T>, value: string | number) => void;
}

const FloatingLabelInput: React.FC<InputFieldProps<T> = ({
  label,
  name,
  type = "text",
  value,
  onChange,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <InputWrapper>
      <StyledInput
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(value.length > 0)}
        placeholder={label} // Placeholder is hidden using CSS
      />
      <FloatingLabel isFloating={isFocused || value.length > 0}>{label}</FloatingLabel>
    </InputWrapper>
  );
};

export default FloatingLabelInput;
