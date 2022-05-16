import React from 'react';
import styled from 'styled-components';

import { StyledGridItem as GridItem } from './GridItem';

const mockMenuData = new Array<String>(9).fill('This is a Window 10 Grid Hover Effect demo item');

export const Win10Grid = () => {
  return (
    <Background>
      <Title>Win 10 Grid Hover Effect</Title>
      <GridList>
        {mockMenuData.map((item, index) => (
          <GridItem key={index}>{item}</GridItem>
        ))}
      </GridList>
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

const GridList = styled.ul`
  padding: 0 5rem 5rem;
  letter-spacing: 2px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
`;
