import React from 'react';

import SEO from '../components/seo';
import Header from '../components/header';
import Footer from '../components/footer';

function IndexPage() {
  return (
    <main className="bg-blue-700 text-white h-screen py-8 px-12 flex flex-col">
      <SEO title="Home" keywords={[`iwgx`, `home`, `blog`]} />

      <section className="flex flex-col justify-between flex-1">
        <Header />
        <Footer />
      </section>
    </main>
  );
}

export default IndexPage;
