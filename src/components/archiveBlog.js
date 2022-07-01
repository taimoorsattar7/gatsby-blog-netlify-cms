/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

const ArchiveBlog = () => {
  const {
    allMarkdownRemark: { nodes },
  } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        nodes {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  `)

  if (nodes.length === 0) {
    return (
      <div className="container max-w-2xl px-3 mx-auto">
        <h3 className="text-base font-normal text-gray-400">nothing Here :)</h3>
      </div>
    )
  }

  return (
    <div className="container max-w-2xl px-3 mx-auto">
      <h1 className="mb-4 text-3xl font-extrabold leading-snug">
        Latest Posts
      </h1>
      <main>
        {nodes.map(blog => {
          return (
            <div className="py-4">
              <h2 class="text-gray-900 text-xl font-extrabold leading-snug">
                <Link to={blog.fields.slug} className="text-indigo-600">
                  {blog.frontmatter.title}
                </Link>
              </h2>

              {blog.frontmatter?.description && (
                <h3 className="text-base font-normal text-gray-700">
                  {blog.frontmatter?.description}
                </h3>
              )}

              <h3 className="py-1 text-xs italic font-light">
                {blog.frontmatter.date} by Taimoor Sattar
              </h3>
            </div>
          )
        })}
      </main>
    </div>
  )
}

export default ArchiveBlog
