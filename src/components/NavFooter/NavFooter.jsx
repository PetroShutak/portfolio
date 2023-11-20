import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaRegAddressCard } from 'react-icons/fa';
import { NavFooterWrapper } from './NavFooter.styled';
import { MdDescription } from 'react-icons/md';
import { GoProjectSymlink } from 'react-icons/go';

const NavFooter = () => {
  return (
    <NavFooterWrapper>
      <Link to="/">
        <FaHome size={40} color="white" />
      </Link>
      <Link to="/about">
        <MdDescription size={40} color="white" />
      </Link>
      <Link to="/contacts">
        <FaRegAddressCard size={40} color="white" />
      </Link>
      <Link to="/projects">
        <GoProjectSymlink size={40} color="white" />
      </Link>
    </NavFooterWrapper>
  );
};

export default NavFooter;
