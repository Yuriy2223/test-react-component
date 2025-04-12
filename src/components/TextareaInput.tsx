/********************без реакт хук форм************************************** */
import React, { useState } from "react";
import styled, { css } from "styled-components";

const sharedStyles = css<{
  $hasError: boolean;
  $isFocused: boolean;
}>`
  width: 100%;
  height: 100%;
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
`;

const InputWrapper = styled.div<{ width: string }>`
  position: relative;
  width: ${({ width }) => width};
  height: 100%;
`;

const StyledTextarea = styled.textarea<{
  $hasError: boolean;
  $isFocused: boolean;
  $hasValue: boolean;
}>`
  ${sharedStyles}
  resize: vertical;
`;

const StyledLabel = styled.label<{
  $isFloating: boolean;
  $hasError: boolean;
}>`
  position: absolute;
  left: 14px;
  top: ${({ $isFloating }) => ($isFloating ? "-12px" : "18px")};
  transform: translateY(${({ $isFloating }) => ($isFloating ? "0" : "-50%")});
  font-size: 16px;
  color: ${({ $hasError, theme }) => ($hasError ? "#ec1e1e" : theme.colorText)};
  background: ${({ theme }) => theme.bgBody};
  padding: 0 6px;
  transition: all 0.2s ease;
  pointer-events: none;
`;

const ErrorText = styled.div`
  color: #ec1e1e;
  font-size: 12px;
  margin-top: 4px;
  margin-left: 4px;
`;

interface TextareaInputProps {
  width?: string;
  label: string;
  value?: string;
  error?: string;
  onChange?: (value: string) => void;
  name?: string;
}

export const Textarea: React.FC<TextareaInputProps> = ({
  width = "100%",
  label,
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
      <StyledTextarea
        name={name}
        value={value}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={(e) => onChange?.(e.target.value)}
        $isFocused={isFocused}
        $hasValue={hasValue}
        $hasError={hasError}
      />
      <StyledLabel $isFloating={isFocused || hasValue} $hasError={hasError}>
        {label}
      </StyledLabel>
      {hasError && <ErrorText>{error}</ErrorText>}
    </InputWrapper>
  );
};
