import React from "react"
import Layout from "../components/Layout"
import SEO from '../components/SEO'

const FaqsPage = () => {
    const siteTitle: string = "Leamos - Preguntas Frecuentes"

    return (
        <Layout>
            <SEO title={siteTitle} />
            <h2>Preguntas Frecuentes!</h2>
        </Layout>
    )
}

export default FaqsPage
