import React from "react"

import Layout from '../components/Layout'
import Seo from '../components/Seo'
import Intro from '../components/Intro'
import Projects from '../components/Projects'
import RssFeed from '../components/RssFeed'
import About from '../components/About'

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Intro />
    <Projects />
    <RssFeed />
    <About />
  </Layout>
)

export default IndexPage