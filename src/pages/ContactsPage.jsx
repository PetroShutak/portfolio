import Contacts from 'components/Contacts/Contacts';
import React from 'react';
import { Helmet } from 'react-helmet';

const ContactsPage = () => {
  return (
    <>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <Contacts />
    </>
  );
};

export default ContactsPage;
