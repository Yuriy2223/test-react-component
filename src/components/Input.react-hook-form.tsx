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
  margin-bottom: 36px;
`;

const StyledInput = styled.input<{
  height?: string;
  $hasError: boolean;
  $isFocused: boolean;
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
  font-size: ${({ $isFloating }) => ($isFloating ? "14px" : "16px")};
  color: ${({ $hasError, theme }) => ($hasError ? "#ec1e1e" : theme.colorText)};
  background: ${({ theme }) => theme.bgBody};
  padding: 0 6px;
  transition: all 0.2s ease;
  pointer-events: none;
`;

const ErrorText = styled.div`
  position: absolute;
  bottom: -22px;
  left: 4px;
  color: #ec1e1e;
  font-size: 12px;
`;

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  width?: string;
  height?: string;
  label: string;
  error?: string;
  onClearError?: () => void;
  onValidate?: () => void;
}

export const Input: React.FC<TextInputProps> = ({
  name,
  width = "100%",
  height = "48px",
  label,
  error,
  value,
  onChange,
  onFocus,
  onBlur,
  onClearError,
  onValidate,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [internalValue, setInternalValue] = useState("");

  const currentValue = value ?? internalValue;
  const hasError = !!error;
  const isFloating = isFocused || !!currentValue;

  return (
    <InputWrapper width={width}>
      <StyledInput
        {...rest}
        name={name}
        value={currentValue}
        onChange={(e) => {
          setInternalValue(e.target.value);
          onChange?.(e);
        }}
        onFocus={(e) => {
          setIsFocused(true);
          onFocus?.(e);
          onClearError?.();
        }}
        onBlur={(e) => {
          setIsFocused(false);
          onBlur?.(e);
          onValidate?.();
        }}
        $isFocused={isFocused}
        $hasError={hasError}
        height={height}
      />
      <StyledLabel $isFloating={isFloating} $hasError={hasError}>
        {label}
      </StyledLabel>
      {hasError && <ErrorText>{error}</ErrorText>}
    </InputWrapper>
  );
};
