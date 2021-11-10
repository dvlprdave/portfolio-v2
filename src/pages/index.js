import React from "react"

import Layout from '../components/Layout'
import Seo from '../components/Seo'
import Intro from '../components/Intro'
import Projects from '../components/Projects'
import Roles from '../components/Roles'

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Intro />
    <Projects />
    <Roles />
  </Layout>
)

export default IndexPage