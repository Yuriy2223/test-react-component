/********************без реакт хук форм************************************** */

import React, { useState } from "react";
import styled, { css } from "styled-components";

const sharedStyles = css<{
  height?: string;
  $hasError: boolean;
  $isFocused: boolean;
}>`
  width: 100%;
  font-size: 16px;
  padding: 12px;
  border: 2px solid
    ${({ $hasError, theme, $isFocused }) =>
      $hasError ? "#ec1e1e" : $isFocused ? theme.colorText : theme.hover};
  border-radius: 8px;
  outline: none;
  color: ${({ theme }) => theme.colorText};
  background: ${({ theme }) => theme.bgBody};
  transition: border-color 0.3s;

  ${({ height }) =>
    height &&
    css`
      height: ${height};
    `}
`;

const InputWrapper = styled.div<{ width: string }>`
  position: relative;
  width: ${({ width }) => width};
`;

const StyledInput = styled.input<{
  height?: string;
  $hasError: boolean;
  $isFocused: boolean;
  $hasValue: boolean;
}>`
  ${sharedStyles}
`;

const StyledLabel = styled.label<{
  $isFloating: boolean;
  $hasError: boolean;
}>`
  position: absolute;
  left: 14px;
  top: ${({ $isFloating }) => ($isFloating ? "-10px" : "50%")};
  transform: translateY(${({ $isFloating }) => ($isFloating ? "0" : "-50%")});
  font-size: ${({ $isFloating }) => ($isFloating ? "12px" : "16px")};
  color: ${({ $hasError, theme }) => ($hasError ? "#ec1e1e" : theme.colorText)};
  background: ${({ theme }) => theme.bgBody};
  padding: 0 6px;
  transition: all 0.2s ease;
  pointer-events: none;
`;

const ErrorText = styled.div`
  color: #ec1e1e;
  font-size: 10px;
  margin-top: 4px;
  margin-left: 4px;
`;

interface TextInputProps {
  width?: string;
  height?: string;
  label: string;
  type?: string;
  value?: string;
  error?: string;
  onChange?: (value: string) => void;
  name?: string;
}

export const Input: React.FC<TextInputProps> = ({
  width = "100%",
  height = "48px",
  label,
  type = "text",
  value = "",
  error,
  onChange,
  name,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const hasValue = !!value;
  const hasError = !!error;

  return (
    <InputWrapper width={width}>
      <StyledInput
        name={name}
        type={type}
        value={value}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={(e) => onChange?.(e.target.value)}
        $isFocused={isFocused}
        $hasValue={hasValue}
        height={height}
        $hasError={hasError}
      />
      <StyledLabel $isFloating={isFocused || hasValue} $hasError={hasError}>
        {label}
      </StyledLabel>
      {hasError && <ErrorText>{error}</ErrorText>}
    </InputWrapper>
  );
};
