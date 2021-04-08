import React from 'react';
import SocialButton from '../SocialButton';
import Styled from './styles';

const Footer = () => (
  <Styled.Footer>
    <Styled.SocialIcons>
      <SocialButton name="linkedin" />
      <SocialButton name="github" />
      <SocialButton name="twitter" />
      <SocialButton name="mail" />
    </Styled.SocialIcons>
    <div>@2021 Márcio Santos</div>
  </Styled.Footer>
);

export default Footer;
