import React from "react"

import Layout from '../components/layout'
import SEO from '../components/seo'
import Intro from '../components/Intro'
import Projects from '../components/projects'
import RssFeed from '../components/rssFeed'
import About from '../components/About'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Intro />
    <Projects />
    <RssFeed />
    <About />
  </Layout>
)

export default IndexPage