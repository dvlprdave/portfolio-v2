import React from 'react'
import styled, {keyframes} from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'

import Img from 'gatsby-image'

export const projectImgs = graphql`
  fragment projectImgs on File {
    childImageSharp {
      fluid(maxWidth: 300, maxHeight: 400 quality: 90) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

const query = graphql`
  query ProjectQuery {
    agency: file(relativePath: { eq: "agency.jpg" }) {
      ...projectImgs
    }
    merlin: file(relativePath: { eq: "merlins-marker.jpg" }) {
      ...projectImgs
    }
    aniplex: file(relativePath: { eq: "aniplex.jpg" }) {
      ...projectImgs
    }
    colorBurst: file(relativePath: { eq: "color-burst.jpg" }) {
      ...projectImgs
    }
    coffeeHouse: file(relativePath: { eq: "coffee-house-screenshot.jpg" }) {
      ...projectImgs
    }
    lightsOut: file(relativePath: { eq: "lights-out.jpg" }) {
      ...projectImgs
    }
  }
`

const ProjectCard = ({ img, fluidImg, projectSite, title, description, tech, repo }) => (
  <StaticQuery
    query={query}
    render={data => (
      <Card img={img}>
        <div>
          <Img fluid={`data.${fluidImg}.childImageSharp.fluid`}/>
          <Title>{title}</Title>
          <Tech>{tech}</Tech>
        </div>
      
        <Footer>
          <Description>{description}</Description>
          <ProjectLinks>
            <a href={projectSite} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
            <span> / </span>
            <a href={repo} target="_blank" rel="noopener noreferrer">
              View Code 
            </a>
          </ProjectLinks>
        </Footer>
      </Card>
    )}
    />
)

export default ProjectCard;

const animate = keyframes`
  0% {
        opacity: 0;
        bottom: 70px;
    }

    20% {
        opacity: 1;
        bottom: 100px;
    }

    100% {
        opacity: 1;
        bottom: 100px;
    }
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  
  width: 345px;
  width: 100%;
  position: relative;
  padding: 1.4rem;
  max-width: 30rem;
  background: #202022;
  color: white;

  &:hover {
    transform: scale(1.1);
    transition: all .2s ease-in-out;
  }

  &:hover:before {
        content: "";
        position: absolute;
        bottom: 100px;
        width: 280px;
        height: 180px;
        z-index: 1;
        animation: ${animate} 3.2s ease-in-out;
        transition: 1s;

        background-size: contain;
        background-repeat: no-repeat;
        background-image: url(${props => props.img});
        pointer-events: none;
    }

    @media (max-width: 658px) {
    width: 100%;
    margin: 0 auto;
  }
`

const Title = styled.h3`
  margin-bottom: 5px;
`
const Description = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
`
const Footer = styled.div`
  margin-top: 10%;
`
const Tech = styled.p`
  font-size: 0.9rem;
  margin-bottom: 0;
  color: grey;
`
const ProjectLinks = styled.div`
  font-size: .9rem;
  color: grey; 

  a { 
    color: gray;
    transition: all 300ms ease-in-out;

    &:hover {
      color: white;
    }
  }
`