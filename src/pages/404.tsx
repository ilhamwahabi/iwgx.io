import React from 'react';

import { SEO } from '../components/seo';

function NotFoundPage() {
  return (
    <>
      <SEO title="404" description="Page not found" keywords={[`iwgx`, `404`, `blog`]} />
      <div>
        <p>404</p>
      </div>
    </>
  );
}

export default NotFoundPage;
