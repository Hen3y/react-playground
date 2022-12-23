import React, { HTMLAttributes, FC } from 'react';
import styled from 'styled-components';

type ButtonProps = HTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};

const StyledButton = styled.button`
  border: none;
  color: #f5f5f5;
  background-color: #daa520;
  transition: all 0.25s ease-in;
  font-size: 2rem;
  font-weight: bold;
  width: 100%;
  max-width: 50vw;
  padding: 1rem;
  cursor: pointer;

  &:hover {
    box-shadow: 10px 8px 0 #ffd700;
    transition: all 0.25s ease-out;
  }

  &:active {
    color: grey;
    background-color: #ffd700;
    box-shadow: 10px 8px 8px #daa520;
  }
`;
