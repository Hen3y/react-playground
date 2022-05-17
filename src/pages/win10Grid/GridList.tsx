import React, { MouseEvent } from 'react';
import styled from 'styled-components';
import { StyledGridItem as GridItem } from './GridItem';
import { setElementStyleWhenMouseIn } from './utils';

const detectRad: number[] = [0, 45, 90, 135, 180, 225, 270, 315, 360].map(
  (angle) => (angle * Math.PI) / 180
);
const OFFSET = 70;
let nearBy: Set<HTMLLIElement> = new Set();

const clearNearBy = () => {
  nearBy.forEach((element) => (element.style.borderImage = ''));
  nearBy.clear();
};

interface GridListProps {
  className?: string;
  menu: string[];
}

const GridList = ({ menu, className }: GridListProps) => {
  const handleOnMouseMoveGrid = (e: MouseEvent<HTMLUListElement>) => {
    const { clientX, clientY } = e;

    clearNearBy();
    detectRad.forEach((rad) => {
      const x = Math.floor(clientX + OFFSET * Math.cos(rad));
      const y = Math.floor(clientY + OFFSET * Math.sin(rad));
      const element = document.elementFromPoint(x, y);
      if (element instanceof HTMLLIElement) {
        nearBy.add(element);
        setElementStyleWhenMouseIn(
          element,
          { clientX, clientY },
          (x, y) =>
            `border-image: radial-gradient(${OFFSET * 2}px ${
              OFFSET * 2
            }px at ${x}px ${y}px ,rgba(255,255,255,0.7),rgba(255,255,255,0.1),transparent ) 9 / 1px / 0px stretch;`
        );
      }
    });
  };

  return (
    <ul
      className={className}
      onMouseMove={handleOnMouseMoveGrid}
      onMouseLeave={() => {
        clearNearBy();
      }}
    >
      {menu.map((item, index) => (
        <GridItem key={index} id={index.toString()}>
          {item}
        </GridItem>
      ))}
    </ul>
  );
};

export const StyledGridList = styled(GridList)`
  padding: 2rem;
  letter-spacing: 2px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
`;
