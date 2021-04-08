import React from 'react';
import Header from '../../components/Header';
import Repositories from '../Repositories';
import Styled from './styles';

const Main = () => (
  <Styled.Main>
    <Header />
    <Repositories />
  </Styled.Main>
);

export default Main;
