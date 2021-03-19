import React from 'react';
import { FaDownload } from 'react-icons/fa';
import Button from '../Button';
import Logo from '../Logo';
import Styled from './styles';

const Navbar = () => (
  <Styled.Navbar>
    <Logo />
    <Styled.Menu>
      {/* <div>menu</div> */}
      <Button icon={<FaDownload />}>Download CV</Button>
    </Styled.Menu>
  </Styled.Navbar>
);

export default Navbar;
