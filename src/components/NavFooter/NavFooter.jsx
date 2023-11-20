import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaRegAddressCard } from 'react-icons/fa';
import { NavFooterWrapper } from './NavFooter.styled';
import { MdDescription } from 'react-icons/md';
import { GoProjectSymlink } from 'react-icons/go';

const NavFooter = () => {
  return (
    <NavFooterWrapper>

      <Link to="/" style={{display: 'flex', flexDirection: 'column', gap:'4px', alignItems: 'center' }}>
        <FaHome size={36} color="white" />
        <p>Home</p>
      </Link>

      <Link to="/about" style={{display: 'flex', flexDirection: 'column', gap:'4px', alignItems: 'center' }}>
        <MdDescription size={36} color="white" />
        <p>About</p>
      </Link>
      <Link to="/contacts" style={{display: 'flex', flexDirection: 'column', gap:'4px', alignItems: 'center' }}>
        <FaRegAddressCard size={36} color="white" />
        <p>Contacts</p>
      </Link>
      <Link to="/projects" style={{display: 'flex', flexDirection: 'column', gap:'4px', alignItems: 'center' }}>
        <GoProjectSymlink size={36} color="white" />
        <p>Projects</p>
      </Link>
    </NavFooterWrapper>
  );
};

export default NavFooter;
