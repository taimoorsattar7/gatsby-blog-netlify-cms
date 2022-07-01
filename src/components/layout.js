import React from "react"

import Header from "@components/header"
import Footer from "@components/footer"

const Layout = ({ location, children }) => {
  return (
    <>
      <Header location={location} />

      <main className="container max-w-2xl px-5 py-10 mx-auto">{children}</main>

      <Footer />
    </>
  )
}

export default Layout
