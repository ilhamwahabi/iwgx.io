import React from 'react';
import { graphql } from 'gatsby';

import { SEO } from '../components/seo';
import { Footer } from '../components/footer';

import { renderRichText } from '../utils/blog/renderRichText';
import { renderTopics } from '../utils/blog/renderTopics';
import { renderDate } from '../utils/blog/renderDate';
import { Header } from '../components/header';

const BlogPost = ({ data }) => {
  const { title, topics, createdAt, updatedAt, banner, content, excerpt } = data.contentfulBlog;

  return (
    <>
      <SEO title={title} keywords={topics} description={excerpt.excerpt} lang="en" meta={[]} />
      <main className="bg-quarternary text-primary min-h-screen py-8 px-12">
        <Header />
        <div className="blogpost flex flex-col py-8 md:w-2/3 lg:w-3/5 xl:w-2/4 m-auto">
          <h2 className="text-2xl md:text-4xl text-center font-bold mb-8">{title}</h2>
          <img src={banner.file.url} alt="banner" className="w-full md:w-3/5 mb-16 m-auto" />
          <div className="mb-4 py-4 border-t border-b border-gray-300 text-base md:text-lg">
            <p className="mb-2 flex items-start">
              <span className="bg-primary text-quarternary px-2 rounded-md">published:</span>
              <span className="ml-2">{renderDate(createdAt)}</span>
            </p>
            <p className="mb-2 flex items-start">
              <span className="bg-primary text-quarternary px-2 rounded-md">last update:</span>
              <span className="ml-2">{renderDate(updatedAt)}</span>
            </p>
            <p className="flex items-start">
              <span className="bg-primary text-quarternary px-2 rounded-md">category:</span>
              <span className="ml-2">{renderTopics(topics)}</span>
            </p>
          </div>
          <div className="leading-relaxed text-base md:text-lg">{renderRichText(content.json)}</div>
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
      excerpt {
        excerpt
      }
    }
  }
`;
