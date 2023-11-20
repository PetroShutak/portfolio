import React from 'react';
import {
  HomeContainer,
  Developer,
  Title,
  ContactsBlock,
} from './HomeStart.styled';
// іконки для контактів
import { MailSend } from '@styled-icons/boxicons-regular/MailSend';
import { Phone } from '@styled-icons/boxicons-regular/Phone';
import { FaDatabase, FaTelegram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
// іконка для skills
import {
  DiCodeBadge,
  DiCss3,
  DiHtml5,
  DiJavascript1,
  DiNodejsSmall,
  DiReact,
} from 'react-icons/di';
import { SiExpress, SiMongodb, SiMui, SiRedux } from 'react-icons/si';
import { ImGit } from 'react-icons/im';

const Home = () => {
  return (
    <>
      <div
        style={{
          color: 'white',
        }}
      >
        <HomeContainer>
          <Title>Petro Shutak</Title>
          {/* avatar */}

          <Developer>Full Stack Developer</Developer>

          {/* block з іконками skills */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <DiCodeBadge size="30" color="gray" />
            <DiHtml5 size="30" color="gray" />
            <DiCss3 size="30" color="gray" />
            <DiJavascript1 size="30" color="gray" />
            <DiReact size="30" color="gray" />
            <DiNodejsSmall size="30" color="gray" />
            <SiExpress size="30" color="gray" />
            <SiMongodb size="30" color="gray"/>
            <SiMui size="26" color="gray" />
            <SiRedux size="26" color="gray" />
            <ImGit size="26" color="gray" />
            <FaDatabase size="26" color="gray" />
          </div>
          <p>HTML, CSS, JavaScript</p>
          <p>React, Node.js, Express, MongoDB</p>
          <p>Redux, REST API</p>
          <p>Material UI, Bootstrap, Styled Components</p>
          {/* <p>Git, GitHub, VS Code</p> */}

          {/* block з іконками contacts */}
          <ContactsBlock>
            <a
              href="https://t.me/PetroShutak"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegram size="30" color="#0088cc" />
            </a>
            <a href="mailto:petro.shutak.ua@gmail.com">
              <MailSend size="30" color="#0842a0" />
            </a>
            <a href="tel:+380993617383">
              <Phone size="30" color="#68217a" />
            </a>
            <a
              href="https://www.linkedin.com/in/petroshutak/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size="30" color="#0a66c2" />
            </a>
            <a
              href="https://github.com/PetroShutak"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size="30" color="#333" />
            </a>
          </ContactsBlock>
        </HomeContainer>
      </div>
    </>
  );
};

export default Home;
