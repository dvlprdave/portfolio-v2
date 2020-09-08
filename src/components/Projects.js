import React from 'react'

import ProjectCard from './ProjectCard'
import SectionContainer from './SectionContainer'

import data from '../data/ProjectData'
import { Title } from '../styled-helpers/Title'

const dataMap = data.map(project => {
  let {title, img, fluidImg, projectSite, description, tech, repo} = project
  return (
    <ProjectCard
    key={title}
    img={img}
    fluidImg={fluidImg}
    projectSite={projectSite}
    title={title}
    description={description}
    tech={tech}
    repo={repo}
  />
  )
})

const Projects = () => (
  <div style={{marginBottom: '2rem'}}>
  <SectionContainer>
    <Title>
      <span></span>
      <span>Works</span>
    </Title>
    { dataMap }
  </SectionContainer>
  </div>
)

export default Projects;