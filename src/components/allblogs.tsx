import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

interface IAllBlogsQuery {
  allContentfulBlog: {
    edges: {
      node: {
        title: string;
        excerpt: {
          excerpt: string;
        };
      };
    }[];
  };
}

const AllBlogs = () => {
  const data: IAllBlogsQuery = useStaticQuery(graphql`
    {
      allContentfulBlog {
        edges {
          node {
            title
            excerpt {
              excerpt
            }
          }
        }
      }
    }
  `);

  return (
    <section className="flex-1 py-8 md:w-2/4 self-center">
      {data.allContentfulBlog.edges.map((node, index) => {
        const { title, excerpt } = node.node;

        return (
          <a className="block mb-4" key={index}>
            <h2 className="text-2xl font-bold">{title}</h2>
            <p className="text-base">{excerpt.excerpt}</p>
          </a>
        );
      })}
    </section>
  );
};

export default AllBlogs;
