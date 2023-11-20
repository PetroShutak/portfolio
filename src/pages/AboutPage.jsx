import React from 'react';
import { Helmet } from 'react-helmet';

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About</title>
      </Helmet>
      <div style={{
        height: '100vh',
        paddingTop: '60px',
        paddingBottom: '60px',
      }}>
<h2 style={{
        color: 'white',
      }}>
I am a passionate developer with a keen interest in building web applications. My skills range from front-end to back-end development, and I enjoy working on projects that challenge me to learn and grow.
</h2>
</div>
    </>
  );
};

export default AboutPage;
