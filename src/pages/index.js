import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Seo from '../components/Seo';
import Layout from '../containers/Layout';
import Main from '../containers/Main';

// markup
const IndexPage = () => (
  <Layout>
    <Seo />
    <Navbar />
    <Main>
      <Header />
    </Main>
    <Footer />
  </Layout>
);

export default IndexPage;
