import Header from 'components/Header/Header';
import React from 'react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <Suspense className='container' fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
