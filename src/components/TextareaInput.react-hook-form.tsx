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

// const ErrorText = styled.div`
//   color: #ec1e1e;
//   font-size: 12px;
//   margin-top: 4px;
//   margin-left: 4px;
// `;
const ErrorText = styled.div`
  position: absolute;
  bottom: -22px;
  left: 4px;
  color: #ec1e1e;
  font-size: 12px;
`;

interface TextareaInputProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  width?: string;
  label: string;
  error?: string;
  onClearError?: () => void;
  onValidate?: () => void;
}

export const Textarea: React.FC<TextareaInputProps> = ({
  width = "100%",
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
      <StyledTextarea
        {...rest}
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
      />
      <StyledLabel $isFloating={isFloating} $hasError={hasError}>
        {label}
      </StyledLabel>
      {hasError && <ErrorText>{error}</ErrorText>}
    </InputWrapper>
  );
};
// import React, { useState } from "react";
// import styled, { css } from "styled-components";

// const sharedStyles = css<{
//   $hasError: boolean;
//   $isFocused: boolean;
// }>`
//   width: 100%;
//   height: 100%;
//   font-size: 16px;
//   padding: 12px;
//   border: 2px solid
//     ${({ $hasError, theme, $isFocused }) =>
//       $hasError ? "#ec1e1e" : $isFocused ? theme.colorText : theme.hover};
//   border-radius: 8px;
//   outline: none;
//   color: ${({ theme }) => theme.colorText};
//   background: ${({ theme }) => theme.bgBody};
//   transition: border-color 0.3s;
// `;

// const InputWrapper = styled.div<{ width: string }>`
//   position: relative;
//   width: ${({ width }) => width};
//   height: 100%;
// `;

// const StyledTextarea = styled.textarea<{
//   $hasError: boolean;
//   $isFocused: boolean;
//   $hasValue: boolean;
// }>`
//   ${sharedStyles}
//   resize: vertical;
// `;

// const StyledLabel = styled.label<{
//   $isFloating: boolean;
//   $hasError: boolean;
// }>`
//   position: absolute;
//   left: 14px;
//   top: ${({ $isFloating }) => ($isFloating ? "-12px" : "18px")};
//   transform: translateY(${({ $isFloating }) => ($isFloating ? "0" : "-50%")});
//   font-size: 16px;
//   color: ${({ $hasError, theme }) => ($hasError ? "#ec1e1e" : theme.colorText)};
//   background: ${({ theme }) => theme.bgBody};
//   padding: 0 6px;
//   transition: all 0.2s ease;
//   pointer-events: none;
// `;

// const ErrorText = styled.div`
//   color: #ec1e1e;
//   font-size: 12px;
//   margin-top: 4px;
//   margin-left: 4px;
// `;

// interface TextareaInputProps
//   extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
//   width?: string;
//   label: string;
//   error?: string;
// }

// export const Textarea: React.FC<TextareaInputProps> = ({
//   width = "100%",
//   label,
//   error,
//   value,
//   ...rest
// }) => {
//   const [isFocused, setIsFocused] = useState(false);
//   const hasValue = typeof value === "string" && value.trim().length > 0;
//   const hasError = !!error;

//   return (
//     <InputWrapper width={width}>
//       <StyledTextarea
//         {...rest}
//         value={value}
//         onFocus={(e) => {
//           setIsFocused(true);
//           rest.onFocus?.(e);
//         }}
//         onBlur={(e) => {
//           setIsFocused(false);
//           rest.onBlur?.(e);
//         }}
//         $isFocused={isFocused}
//         $hasValue={hasValue}
//         $hasError={hasError}
//       />
//       <StyledLabel $isFloating={isFocused || hasValue} $hasError={hasError}>
//         {label}
//       </StyledLabel>
//       {hasError && <ErrorText>{error}</ErrorText>}
//     </InputWrapper>
//   );
// };
