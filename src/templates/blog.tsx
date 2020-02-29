import React from 'react';
import { graphql } from 'gatsby';

import { SEO } from '../components/seo';
import { Footer } from '../components/footer';

import { renderRichText } from '../utils/blog/renderRichText';
import { renderTopics } from '../utils/blog/renderTopics';
import { renderDate } from '../utils/blog/renderDate';
import { Header } from '../components/header';

const BlogPost = ({ data }) => {
  const { title, topics, createdAt, updatedAt, banner, content } = data.contentfulBlog;

  return (
    <>
      <SEO title={title} />
      <main className="bg-quarternary text-primary min-h-screen py-8 px-12">
        <Header />
        <div className="blogpost flex flex-col py-8 md:w-2/3 lg:w-3/5 xl:w-2/4 m-auto">
          <h2 className="text-xl md:text-3xl text-center font-bold mb-8">{title}</h2>
          <img src={banner.file.url} alt="banner" className="w-full md:w-3/5 mb-16 m-auto" />
          <div className="mb-4 py-4 border-t border-b border-gray-300">
            <p>published: {renderDate(createdAt)} </p>
            <p>last update: {renderDate(updatedAt)}</p>
            <p>category: {renderTopics(topics)}</p>
          </div>
          <div className="leading-relaxed">{renderRichText(content.json)}</div>
        </div>
      </main>
      <Footer />
    </>
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
