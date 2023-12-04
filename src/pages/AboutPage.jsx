import React from 'react';
import { Helmet } from 'react-helmet';

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About</title>
      </Helmet>
      <div
        style={{
          height: '100vh',
          paddingTop: '60px',
          paddingBottom: '60px',
          position: 'relative', // Додаємо позиціонування для псевдоелемента
        }}
      >
        <div
          style={{
            maxWidth: '600px',
            margin: '0 auto',
            textAlign: 'center',
            position: 'relative',
          }}
        >
          <h2
            style={{
              fontSize: '2rem',
              fontWeight: '700',
              color: 'white',
              lineHeight: '1.75',
              position: 'relative',
              zIndex: '1', // Визначаємо висоту над іншими елементами
            }}
          >
            I am a passionate developer with a keen interest in building web applications. My skills range from front-end to back-end development, and I enjoy working on projects that challenge me to learn and grow.
          </h2>
          <div
            style={{
              position: 'absolute',
              top: '0',
              left: '0',
              width: '100%',
              height: '100%',
              background: 'linear-gradient(45deg, #ff9a9e, #fecfef)',
              zIndex: '0', // Визначаємо нижчу висоту
              animation: 'gradientAnimation 5s linear infinite', // Анімація градієнту
              borderRadius: '10px', // Округлення країв
            }}
          />
        </div>
      </div>
      <style>
        {`
          @keyframes gradientAnimation {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
        `}
      </style>
    </>
  );
};

export default AboutPage;
