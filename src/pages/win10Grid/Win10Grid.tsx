import React from 'react';
import styled from 'styled-components';

import { StyledGridList as GridList } from './GridList';

const mockMenuData = new Array<string>(9).fill('This is a Window 10 Grid Hover Effect demo item');

export const Win10Grid = () => {
  return (
    <Background>
      <Title>Win 10 Grid Hover Effect</Title>
      <GridList menu={mockMenuData} />
    </Background>
  );
};

const Background = styled.div`
  background-color: #111;
  text-align: center;
  color: #fff;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  padding: 2rem;
`;
