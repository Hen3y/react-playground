import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

export const Home = () => {
  const { pathname } = useLocation();
  const isAtHome = !pathname.split('/')[1];

  return isAtHome ? (
    <div>
      <h1>Home</h1>
      <nav>
        <Link to={'/win-10-grid'}>Win 10 Grid</Link>
      </nav>
    </div>
  ) : (
    <Outlet />
  );
};
