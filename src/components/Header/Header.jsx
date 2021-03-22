import React from 'react';
import Avatar from '../Avatar';
import { AvatarContainer, Container, Description, DescriptionContainer, SubTitle, Title } from './styles';

const Header = () => (
  <Container>
    <AvatarContainer>
      <Avatar />
    </AvatarContainer>
    <DescriptionContainer>
      <SubTitle>Hi, I&apos;m</SubTitle>
      <Title>Márcio Santos</Title>
      <SubTitle>Frontend Developer</SubTitle>
      <Description>
        Since I realize the impact software has on people&apos;s lives and how much it can significantly improve it, I
        started giving my best to this career with all my passion. I am a frontend engineer who focuses on producing
        high-quality and well-tested code, mainly using Javascript and its variety of libraries, such as React, NodeJS,
        and Typescript. Through these technologies, I have been focusing on creating reliable and easy-to-use WEB
        applications with consistent UI. I am a team player always in a good mood and resilient to changes with
        leadership and ownership instincts.
      </Description>
    </DescriptionContainer>
  </Container>
);

export default Header;
