'use client'

import React from "react";
import styled from "styled-components";

interface IButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  isDisabled?: boolean;
}

const StyledButton = styled.button`
  background-color: #F5B588;
  padding: 12px;
  border-radius: 8px;
  border: none;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 207px;
  gap: 4px;
  height: fit-content;
  font-family: 'Manrope';
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0%;
  vertical-align: middle;
`;

export default function Button({children, onClick, isDisabled}: IButtonProps) {
  return (
    <StyledButton
      disabled={isDisabled}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  )
}
