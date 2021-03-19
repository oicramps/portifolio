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
        Fusce tempor magna mi, non egestas velit ultricies nec. Aenean convallis, risus non condimentum gravida, odio
        mauris ullamcorper felis, ut venenatis purus ex eu mi. Quisque imperdiet lacinia urna, a placerat sapien pretium
        eu.
      </Description>
    </DescriptionContainer>
  </Container>
);

export default Header;
