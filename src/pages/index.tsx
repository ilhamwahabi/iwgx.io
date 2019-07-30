import React from 'react';

import SEO from '../components/seo';

function IndexPage() {
  return (
    <>
      <SEO title="Home" keywords={[`iwgx`, `home`, `blog`]} />

      <section className="text-center">Hey there! Welcome to Crosx.</section>
    </>
  );
}

export default IndexPage;
