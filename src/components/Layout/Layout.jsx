import Header from 'components/Header/Header';
import StartPage from 'pages/StartPage';
import React from 'react';
import { useState } from 'react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  const [isStartPageVisible, setIsStartPageVisible] = useState(true);

  const handleHideStartPage = () => {
    setIsStartPageVisible(false);
  };
  return (
    <>
      {isStartPageVisible && (
        <StartPage onHideStartPage={handleHideStartPage} />
      )}
      <Header />
      <div className="container">
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default Layout;
