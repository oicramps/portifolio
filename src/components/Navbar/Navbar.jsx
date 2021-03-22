import React from 'react';
import { FaDownload } from 'react-icons/fa';
import Button from '../Button';
import Logo from '../Logo';
import Styled from './styles';
import cv from '../../files/marcio-santos-cv.pdf';

const Navbar = () => (
  <Styled.Navbar>
    <Logo />
    <Styled.Menu>
      {/* <div>menu</div> */}
      <Button icon={<FaDownload />} download href={cv}>
        Download CV
      </Button>
    </Styled.Menu>
  </Styled.Navbar>
);

export default Navbar;
