import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
// Components
import Header from "../components/Header"
import Work from "../components/Work"
import About from "../components/about"
import Skills from "../components/skills"
import Promotion from "../components/Promotion"
import Footer from "../components/Footer"
import ThemeContextProvider from "../components/ThemeContext"

const IndexPage = () => (
  <ThemeContextProvider>
    <div>
    <Layout>
    <SEO title="Abdullah Sumbal" />
    <Header></Header>
   {/*  <Work></Work> */}
    {/* <About></About>
    <Skills></Skills>
    <Footer></Footer> */}
  </Layout>
  </div>
  </ThemeContextProvider>
)

export default IndexPage
