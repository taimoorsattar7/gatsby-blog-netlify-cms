import React from "react"
import { Link, graphql } from "gatsby"

import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "@components/layout"
import Seo from "@components/seo"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const { previous, next } = data
  const featureImg = post?.frontmatter?.featuredimage

  return (
    <Layout location={location}>
      <article className="container w-full">
        <h1 className="mb-4 text-4xl font-extrabold leading-snug">
          {post.frontmatter.title}
        </h1>

        <p className="py-3 text-base italic font-light">
          Published {post.frontmatter.date}
        </p>

        {featureImg && (
          <GatsbyImage
            className="w-full h-auto mb-5"
            image={getImage(featureImg?.childImageSharp?.gatsbyImageData)}
            alt={"heading"}
          />
        )}

        <section
          className="prose max-w-fit"
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />

        <hr className="mb-8 border-b-2 border-grey-light" />

        <div className="flex content-center justify-between pb-12 font-sans">
          <div className="text-left">
            {previous?.fields?.slug && (
              <>
                <span className="text-xs font-normal md:text-sm text-grey-dark">
                  {previous && (
                    <Link to={previous.fields.slug} rel="prev">
                      &laquo; Previous Post
                    </Link>
                  )}
                </span>
                <br />
                <p>
                  <Link
                    to={previous.fields.slug}
                    className="text-base font-bold no-underline break-normal md:text-sm text-teal hover:underline"
                  >
                    {previous.frontmatter.title}
                  </Link>
                </p>
              </>
            )}
          </div>

          <div className="text-right">
            {next?.fields?.slug && (
              <>
                <span className="text-xs font-normal md:text-sm text-grey-dark">
                  <Link to={next.fields.slug} rel="next">
                    Next Post &raquo;
                  </Link>
                </span>
                <br />
                <p>
                  <Link
                    to={next.fields.slug}
                    className="text-base font-bold no-underline break-normal md:text-sm text-teal hover:underline"
                  >
                    {next.frontmatter.title}
                  </Link>
                </p>
              </>
            )}
          </div>
        </div>
      </article>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        featuredimage {
          publicURL
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
