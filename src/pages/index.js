import React from "react"
import Layout from "@components/layout"

import Seo from "@components/seo"

import ArchiveBlog from "@components/archiveBlog"

const BlogIndex = ({ data, location }) => {
  return (
    <Layout location={location}>
      <Seo
        title="Homepage"
        location={location}
        description="The Homepage to show blog posts."
      />

      <ArchiveBlog />
    </Layout>
  )
}

export default BlogIndex
