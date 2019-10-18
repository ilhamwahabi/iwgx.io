import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/seo';

const BlogPost = ({ data }) => {
  const { title, topics } = data.contentfulBlog;

  const arrangedTopics = topics.join(', ');

  return (
    <main className="bg-blue-700 text-white min-h-screen py-8 px-12 flex flex-col">
      <SEO title={title} />
      <div className="blogpost">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-base">{arrangedTopics}</p>
      </div>
    </main>
  );
};

export default BlogPost;

export const pageQuery = graphql`
  query($id: String!) {
    contentfulBlog(id: { eq: $id }) {
      title
      topics
    }
  }
`;
