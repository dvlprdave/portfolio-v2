import React from 'react'

import ProjectCard from './ProjectCard'
import SectionContainer from './SectionContainer'
import { Title } from './Title'

// Project images
import kintsugi from '../images/kintsugi.png'
import agency from '../images/agency.jpg'
import merlin from '../images/merlins-marker.jpg'
import colorBurst from '../images/color-burst.jpg'
import coffeeHouse from '../images/coffee-house-screenshot.jpg'
import lightsOut from '../images/lights-out.jpg'

const Projects = () => (
  <div style={{marginBottom: '2rem'}}>
  <SectionContainer>
    <Title>
      <span></span>
      <span>Works</span>
    </Title>
    <ProjectCard
      img={kintsugi}
      projectSite='https://kintsugi.now.sh/'
      title='Kintsugi'
      description='An Anime databse where users can browse and discover anime titles.'
      tech='NextJS | Tailwind CSS'
      repo='https://github.com/dvlprdave/Kintsugi'
    />
    <ProjectCard
      img={agency}
      fluidImg='agency'
      projectSite='https://agency-landing.netlify.app/'
      title='Agency'
      description='A simple landing page with a focus on minimal design and fluid animations using GSAP.'
      tech='React | GSAP'
      repo='https://github.com/dvlprdave/Agency'
    />
    <ProjectCard
      img={merlin}
      fluidImg='merlin'
      projectSite='https://merlins-marker.com/'
      title='Merlins-Marker'
      description='A theme generator for Prism.js. Users create their own theme for code highlighting.'
      tech='JavaScript | CSS Variables'
      repo='https://github.com/dvlprdave/merlins-marker'
    />
    <ProjectCard
      img={colorBurst}
      projectSite='https://color-burst-b7465.firebaseapp.com/'
      title='Color-Burst'
      description='A color palette generator to help users on their next project.'
      tech='React | React-Router | React-Sortable'
      repo='https://github.com/dvlprdave/Color-Burst'
    />
    <ProjectCard
      img={coffeeHouse}
      projectSite='https://dvlprdave.github.io/coffee-house/'
      title='Coffee House'
      description='A cofee/restaurant website.'
      tech='HTML/CSS | Sass | CSS Grid'
      repo='https://github.com/dvlprdave/coffee-house'
    />
    <ProjectCard
      img={lightsOut}
      projectSite='https://lights-out-a77ce.firebaseapp.com/'
      title='Lights Out'
      description='A puzzle game in which you need to toggle all of the lights off.'
      tech='React'
      repo='https://github.com/dvlprdave/lights-out'
    />
  </SectionContainer>
  </div>
)

export default Projects;