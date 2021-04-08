import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Seo from '../components/Seo';
import Layout from '../containers/Layout';
import Main from '../containers/Main';

// markup
const IndexPage = () => (
  <Layout>
    <Seo />
    <Navbar />
    <Main />
    <Footer />
  </Layout>
);

export default IndexPage;
