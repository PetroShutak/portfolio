import React, { useEffect } from 'react';
import { WrapperLogo } from './Logo.styled';

const Logo = () => {
  useEffect(() => {
    const spans = document.querySelectorAll('.logo-span');
    let index = 0;

    const changeColor = () => {
      spans.forEach((span, idx) => {
        if (idx === index) {
          span.style.color = 'gray'; // Зміна кольору активного span
        } else {
          span.style.color = 'black'; // Повернення кольору інших span
        }
      });

      index = (index + 1) % spans.length; // Циклічне перемикання між spans
    };

    const interval = setInterval(changeColor, 500); // Зміна кольору кожної секунди

    return () => clearInterval(interval); // Очищення інтервалу при виході з компонента
  }, []);

  return (
    <WrapperLogo>
      <span className="logo-span">s</span>
      <span className="logo-span">h</span>
      <span className="logo-span">u</span>
      <span className="logo-span">t</span>
      <span className="logo-span">a</span>
      <span className="logo-span">k</span>
      <span className="logo-span"> </span>
      <span className="logo-span">p</span>
      <span className="logo-span">e</span>
      <span className="logo-span">t</span>
      <span className="logo-span">r</span>
      <span className="logo-span">o</span>
    </WrapperLogo>
  );
};

export default Logo;
