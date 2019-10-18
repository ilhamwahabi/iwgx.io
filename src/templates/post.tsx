import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/seo';

import { renderRichText } from '../utils/post/renderRichText';
import { renderTopics } from '../utils/post/renderTopics';

const BlogPost = ({ data }) => {
  const { title, topics, createdAt, updatedAt, banner, content } = data.contentfulBlog;

  return (
    <main className="bg-blue-700 text-white min-h-screen py-8 px-12 flex flex-col">
      <SEO title={title} />
      <div className="blogpost">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-base">
          <span>created: {createdAt}</span> <span>last update: {updatedAt}</span>
        </p>
        <p className="text-base">{renderTopics(topics)}</p>
        <img src={banner.file.url} alt="banner" className="w-1/3" />
        <div className="my-4">{renderRichText(content.json)}</div>
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
      createdAt
      updatedAt
      banner {
        file {
          url
        }
      }
      content {
        json
      }
    }
  }
`;
