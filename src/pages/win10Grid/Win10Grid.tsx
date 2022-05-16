import React from 'react';
import styled from 'styled-components';

const mockMenuData = new Array<String>(9).fill('This is a Window 10 Grid Hover Effect demo item');

export const Win10Grid = () => {
  const handleOnMouseLeave = () => {};

  const handleOnMouseMove = (e: React.MouseEvent<HTMLLIElement>) => {
    
  };

  return (
    <Background>
      <Title>Win 10 Grid Hover Effect</Title>
      <GridList>
        {mockMenuData.map((item, index) => (
          <GridItem key={index} onMouseLeave={handleOnMouseLeave} onMouseMove={handleOnMouseMove}>
            {item}
          </GridItem>
        ))}
      </GridList>
    </Background>
  );
};

const Background = styled.div`
  background-color: #333;
  text-align: center;
  color: #fff;
  height: 100%;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  padding: 2rem;
`;

const GridItem = styled.li`
  padding: 1rem 2rem;
  text-align: center;
  border: 1px solid transparent;
  line-height: 3;
`;

const GridList = styled.ul`
  padding: 0 5rem 5rem;
  letter-spacing: 2px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
`;
