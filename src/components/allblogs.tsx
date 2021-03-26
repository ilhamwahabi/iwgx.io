import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

interface IAllBlogsQuery {
  allContentfulBlog: {
    edges: {
      node: {
        title: string;
        slug: string;
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
            slug
            excerpt {
              excerpt
            }
          }
        }
      }
    }
  `);

  return (
    <section className="flex-1 py-8 xl:w-2/4 self-center">
      <h2 className="text-3xl mb-4 font-bold">Terbaru</h2>
      {data.allContentfulBlog.edges.map((node) => {
        const { title, slug, excerpt } = node.node;

        return (
          <Link to={slug} key={slug}>
            <div className="bg-white mb-4 py-4 px-6 border-l-4 border-primary shadow-lg">
              <h2 className="text-2xl font-bold mb-2">{title}</h2>
              <p className="text-base">{excerpt.excerpt}</p>
            </div>
          </Link>
        );
      })}
    </section>
  );
};
