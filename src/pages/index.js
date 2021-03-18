import React from 'react';
import Header from '../containers/components/Header';
import Seo from '../containers/components/Seo';
import Layout from '../containers/Layout';

// markup
const IndexPage = () => (
  <Layout>
    <Seo />
    <span>navbar</span>
    <Header />
    <main>content</main>
    <footer>footer</footer>
  </Layout>
);

export default IndexPage;
