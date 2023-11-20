import React from 'react'
import { FaTelegram } from 'react-icons/fa'
import { MailSend } from '@styled-icons/boxicons-regular/MailSend'
import { Phone } from '@styled-icons/boxicons-regular/Phone'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { ContactsBlockContainer } from './ContactsBlock.styled'



const ContactsBlock = () => {
  return (
    <ContactsBlockContainer>
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
  </ContactsBlockContainer>
  )
}

export default ContactsBlock;