import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

const StyledButton = styled.button`
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  padding: 8px 12px;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
    filter: brightness(4);
  }
`;

/**
 * Primary UI component for user interaction
 */
export const Button = ({ backgroundColor, label, ...props }: ButtonProps) => {
  return (
    <StyledButton
      type="button"
      {...props}
      css={`
        background-color: ${backgroundColor};
      `}
    >
      {label}
    </StyledButton>
  );
};
