import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../components/Button';

export const Home = () => {
  const { pathname } = useLocation();
  const isAtHome = !pathname.split('/')[1];

  return isAtHome ? (
    <Background>
      <Title>Home</Title>
      <NavCol>
        <Link to={'/win-10-grid'}>
          <Button>Win 10 Grid</Button>
        </Link>
        <Link to={'/class-component'}>
          <Button>React Class Component Review</Button>
        </Link>
      </NavCol>
    </Background>
  ) : (
    <Outlet />
  );
};

const Background = styled.div`
  background-color: #fcf7d2;
  color: #fff;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  padding: 2rem;
  color: #daa520;
`;

const NavCol = styled.nav`
  display: flex;
  flex-flow: column nowrap;
  
  & > :not(a:last-of-type) button {
    margin-bottom: 1.5rem;
  }
`
