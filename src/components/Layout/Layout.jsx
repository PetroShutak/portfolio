import Header from 'components/Header/Header';
import StartPage from 'pages/StartPage';
import React from 'react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <div>
        <StartPage />
        <Header />
       
      </div>
      <Suspense className="container" fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
