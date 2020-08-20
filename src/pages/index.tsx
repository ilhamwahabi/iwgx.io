import React from 'react';

import { SEO } from '../components/seo';
import { Header } from '../components/header';
import { AllBlogs } from '../components/allblogs';
import { Footer } from '../components/footer';

function IndexPage() {
  return (
    <main className="bg-quarternary text-primary">
      <SEO title="Home" description="Homepage" keywords={[`iwgx`, `home`, `blog`]} />
      <section className="py-8 px-12 min-h-screen flex flex-col">
        <Header />
        <AllBlogs />
      </section>
      <Footer />
    </main>
  );
}

export default IndexPage;
