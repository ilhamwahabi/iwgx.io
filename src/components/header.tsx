import React from 'react';
import { Link } from 'gatsby';

export const Header = () => {
  return (
    <section>
      <h1 className="text-6xl leading-none">
        <Link to="/" className="text-6xl leading-none">
          blog
        </Link>
        <span className="ml-2 text-3xl">
          {' by '}
          <a href="https://iwgx.io" target="_blank" rel="noreferrer">
            iwgx
          </a>
        </span>
      </h1>

      <h5 className="text-xl mt-2">
        <span>frontend, startup, ITB, dll</span>
      </h5>
    </section>
  );
};
