import React from 'react';
import { Link } from 'gatsby';

export const Header = () => {
  return (
    <section>
      <Link to="/" className="text-6xl leading-none">
        iwgx
      </Link>
      <h5 className="text-xl mt-2">
        <span>a blog by Ilham Wahabi</span>
      </h5>
    </section>
  );
};
