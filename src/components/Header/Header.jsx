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
        Since I realize the impact that software has on people&apos;s lives and how much it is able to significantly
        improve their lives, I started to give my best and love this career at the same time. I am a frontend engineer
        who focuses on producing quality and well-tested code, mainly using Javascript and its variety of libraries,
        where my repertoire is mainly composed of React, NodeJS, and Typescript. With these technologies, I have been
        focusing on creating reliable WEB applications with a consistent UI, and easy to use. I am a person who plays
        with the team, with leadership and ownership instincts, but always in a good mood and resilient to changes.
      </Description>
    </DescriptionContainer>
  </Container>
);

export default Header;
