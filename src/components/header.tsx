import React from 'react';
import { Link } from 'gatsby';

export const Header = () => {
  return (
    <section>
      <h1 className="text-6xl leading-none">
        <Link to="/" className="text-6xl leading-none">
          iwgx
        </Link>
      </h1>
      <h5 className="text-xl mt-2">
        <span>frontend, startup, ITB, etc</span>
      </h5>
    </section>
  );
};
