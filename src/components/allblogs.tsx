import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

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

export const AllBlogs = () => {
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
      <h2 className="text-3xl mb-4 font-bold mb-2">Blog</h2>
      {data.allContentfulBlog.edges.map((node, index) => {
        const { title, excerpt } = node.node;

        const slug = title
          .toLowerCase()
          .split(' ')
          .join('-');
        const pageUrl = `post/${slug}`;

        return (
          <div>
            <Link className="block mb-4" key={index} to={pageUrl}>
              <h2 className="text-2xl font-bold">{title}</h2>
              <p className="text-base">{excerpt.excerpt}</p>
            </Link>
          </div>
        );
      })}
    </section>
  );
};
