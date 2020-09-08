// Twitter icon icon by Icons8
// Dev icon icon by Icons8 https://icons8.com/
// Email icon by https://www.flaticon.com/authors/xnimrodx

import React from 'react'
import styled from 'styled-components'
import { Title } from '../styled-helpers/Title'

import Twitter from '../assets/twitter.svg'
import DevTo from '../assets/devto.svg'
import Arrow from '../assets/arrow.svg'

const Contact = () => (
  <>
    <Title blog>
      <span></span>
      <span>About Me</span>
    </Title>

    <Wrapper>
      <About>
        <AboutInfo>
          I'm David, a Web Developer, creative, and father. With over three years of experience, I've come to love the endless journey of learning and creating. I'm actively building out <span><StyledLink href='https://github.com/dvlprdave' targer='_blank' rel='noopener noreferrer'>projects</StyledLink></span>, writing articles for my tech <span><StyledLink href='https://papabearcodes.com/' target='_blank' rel='noopener noreferrer'>blog</StyledLink></span>, and making code related <span><StyledLink href='https://www.youtube.com/channel/UCo-24yU0YmmHOT9T3fdBRyQ' target='_blank' rel='noopener noreferrer'>YouTube</StyledLink></span> videos. 
        </AboutInfo>

        <AboutInfo>
          If you'd like to connect, shoot me an email and let's chat about any existing or new projects I could assist with.
        </AboutInfo>
      </About>

      <div>
        <Email>
          <p>Say hi at</p>
            <a 
              href="mailto:devdavee@gmail.com"
              target="_blank" 
              rel="noopener noreferrer"
            >devdavee@gmail.com
            </a>
            <span>
              <Arrow />
            </span>
        </Email>
      </div>
    </Wrapper>

    <Social>
      <a 
        href='https://twitter.com/PapaBearCodes' 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <Twitter />
      </a>

      <a 
        href='https://dev.to/papabearcodes' 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <DevTo />
      </a>
    </Social>
  </>
)

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-right: 10px;
  margin-bottom: 3rem;

  @media (max-width: 786px) {
    flex-direction: column;
  }
`

const About = styled.div`
  max-width: 40rem;
`

const AboutInfo = styled.div`
  font-size: 1.25rem;
  line-height: 1.8rem;
  margin-bottom: 2rem;

  @media (max-width: 786px) {
    font-size: 1rem;
    line-height: 1.5rem;
  }
`

const Email = styled.div`
  font-size: 1.8rem;

  p:first-child { 
    margin-bottom: 12px;
  }

  svg {
    margin-left: 12px;
  }

  @media (max-width: 786px) {
    font-size: 1.5rem;
  }
`

const Social = styled.div`
  display: flex;
  justify-content: center;

  svg {
    margin-right: 10px;
  }
`

const StyledLink = styled.a`
  border-bottom: 2px solid teal;
  padding-bottom: 1px;
  transition: ease-in-out 400ms;

  &:hover {
    color: gray;
  }
`

export default Contact