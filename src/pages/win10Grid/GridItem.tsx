import React, { MouseEvent, ReactNode } from 'react';
import styled from 'styled-components';

interface GridItemProps {
  className?: string;
  children: ReactNode;
}

const GridItem = ({ className, children }: GridItemProps) => {
  const handleOnMouseLeave = (e: MouseEvent<HTMLLIElement>) => {
    e.currentTarget.removeAttribute('style');
  };

  const handleOnMouseMove = (e: MouseEvent<HTMLLIElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.setAttribute(
      'style',
      `background: radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0));border-image: radial-gradient(20% 75% at ${x}px ${y}px ,rgba(255,255,255,0.7),rgba(255,255,255,0.1) ) 1 / 1px / 0px stretch `
    );
  };

  return (
    <li className={className} onMouseMove={handleOnMouseMove} onMouseLeave={handleOnMouseLeave}>
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
