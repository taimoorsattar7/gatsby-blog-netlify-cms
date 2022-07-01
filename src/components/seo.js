import React from "react"
import { Helmet } from "react-helmet"

const Seo = ({ location, description, title, image }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <link rel="canonical" href={location.href} />

        {/* Social: Twitter  */}
        {/* After inserting META need to validate at https://dev.twitter.com/docs/cards/validation/validator  */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        {image && <meta name="twitter:image" content={image} />}

        <meta name="twitter:url" content={location.href} />

        {/* Open Graph */}
        <meta property="og:url" content={location.href} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        {image && <meta property="og:image" content={image} />}

        <meta property="og:description" content={description} />
      </Helmet>
    </>
  )
}

export default Seo
