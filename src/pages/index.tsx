import React from 'react';

import { SEO } from '../components/seo';
import { Header } from '../components/header';
import { AllBlogs } from '../components/allblogs';
import { Footer } from '../components/footer';

function IndexPage() {
  return (
    <main className="bg-quarternary text-primary min-h-screen py-8 px-12 flex flex-col">
      <SEO title="Home" keywords={[`iwgx`, `home`, `blog`]} />
      <section className="flex flex-col justify-between flex-1">
        <Header />
        <AllBlogs />
        <Footer />
      </section>
    </main>
  );
}

export default IndexPage;
