import React, { Key, MouseEvent, ReactNode } from 'react';
import styled from 'styled-components';
import { setElementStyleWhenMouseIn } from './utils';

interface GridItemProps {
  className?: string;
  children: ReactNode;
  id: string;
}

const GridItem = ({ className, children, id }: GridItemProps) => {
  const handleOnMouseMoveItem = (e: MouseEvent<HTMLLIElement>) => {
    e.stopPropagation();
    const { clientX, clientY } = e;
    setElementStyleWhenMouseIn(
      e.currentTarget,
      { clientX, clientY },
      (x, y) =>
        `background: radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0));border-image: radial-gradient(20% 75% at ${x}px ${y}px ,rgba(255,255,255,0.7),rgba(255,255,255,0.1) ) 1 / 1px / 0px stretch;`
    );
  };

  const handleOnMouseLeaveItem = (e: MouseEvent<HTMLLIElement>) =>
    e.currentTarget.removeAttribute('style');

  return (
    <li
      id={id}
      className={className}
      onMouseMove={handleOnMouseMoveItem}
      onMouseLeave={handleOnMouseLeaveItem}
    >
      {children}
    </li>
  );
};

export const StyledGridItem = styled(GridItem)`
  padding: 1rem 2rem;
  text-align: center;
  border: 1px solid transparent;
  line-height: 3;
`;
