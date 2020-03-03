import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

const IndexPage = () => {
  const siteTitle: string = "Leamos - Portada"

  return (
    <Layout>
      <SEO title={siteTitle} />
      <h2>Bienvenido a Leamos!</h2>
    </Layout>
  )
}

export default IndexPage
