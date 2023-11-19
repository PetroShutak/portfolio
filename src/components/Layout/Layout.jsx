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
      <div>
        {isStartPageVisible && (
          <StartPage onHideStartPage={handleHideStartPage} />
        )}
        <Header />
       
      </div>
      <Suspense className="container" fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      {/* <footer>
        <p>Footer</p>
      </footer> */}
    </>
  );
};

export default Layout;
