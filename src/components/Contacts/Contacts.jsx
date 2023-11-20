import React from 'react';
import { ContactsWrapper, Title } from './Contacts.styled';
// іконки для контактів
import { MailSend } from '@styled-icons/boxicons-regular/MailSend';
import { Phone } from '@styled-icons/boxicons-regular/Phone';
import { FaTelegram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
// import { FaGithub } from 'react-icons/fa';

const Contacts = () => {
  return (
    
    <ContactsWrapper>
      <Title></Title>
      {/* <p>Here you can find my contacts</p> */}
      <a
        href="https://www.linkedin.com/in/petroshutak/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size="30" color="#0a66c2" />
        linkedin: Petro Shutak
      </a>
      <a
        href="https://t.me/PetroShutak"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTelegram size="30" color="#0088cc" />
        telegram : @PetroShutak
      </a>
      <a href="mailto:petro.shutak.ua@gmail.com">
        <MailSend size="30" color="#0842a0" />
        petro.shutak.ua@gmail.com
      </a>
      <a href="tel:+380993617383">
        <Phone size="30" color="#68217a" />
        phone : +380 99 361 73 83
      </a>
      {/* <a
        href="https://github.com/PetroShutak"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size="30" color="#333" />
        github: PetroShutak
      </a> */}
    </ContactsWrapper>
  );
};

export default Contacts;
