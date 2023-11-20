import React from 'react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'components/Header/Header';
import NavFooter from 'components/NavFooter/NavFooter';
// import StartPage from 'pages/StartPage';
// import { useState } from 'react';

const Layout = () => {
  // const [isStartPageVisible, setIsStartPageVisible] = useState(true);

  // const handleHideStartPage = () => {
  //   setIsStartPageVisible(false);
  // };
  return (
    <>
      {/* {isStartPageVisible && (
        <StartPage onHideStartPage={handleHideStartPage} />
      )} */}
      <Header />
      <div className="container">
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
      <NavFooter />
    </>
  );
};

export default Layout;
