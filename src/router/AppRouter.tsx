import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ClassComponent, Home, Win10Grid, PortalPage } from '../pages';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='win10-grid' element={<Win10Grid />} />
          <Route path='class-component' element={<ClassComponent />} />
          <Route path='react-portal' element={<PortalPage />} />
        </Route>
        <Route path='*' element={<Navigate to={'/'} />} />
      </Routes>
    </BrowserRouter>
  );
};
