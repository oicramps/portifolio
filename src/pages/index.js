import React from 'react';
import Footer from '../containers/components/Footer';
import Header from '../containers/components/Header';
import Navbar from '../containers/components/Navbar';
import Seo from '../containers/components/Seo';
import Layout from '../containers/Layout';

// markup
const IndexPage = () => (
  <Layout>
    <Seo />
    <Navbar />
    <Header />
    <main>content</main>
    <Footer />
  </Layout>
);

export default IndexPage;
