// Twitter icon icon by Icons8
// Dev icon icon by Icons8 https://icons8.com/
// Email icon by https://www.flaticon.com/authors/xnimrodx

import React from 'react'
import styled from 'styled-components'
import { Title } from 'styled-helpers/Title'

import DevTo from 'assets/devto.svg'

const Roles = () => (
  <>
    <Title center>
      <span></span>
      <span>Roles</span>
    </Title>

    <Wrapper>
      <About>
      <Role>
        <Company>Macy's</Company>
        <Position>Interactive Developer</Position>
      </Role>
      <Role>
        <Company>Mercury Healthcare</Company>
        <Position>Web Engineer</Position>
      </Role>
      </About>

    
    </Wrapper>

    <Social>
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
  margin: 3rem 0;

  @media (max-width: 786px) {
    flex-direction: column;
  }
`

const About = styled.div`
  max-width: 40rem;
`

const Role = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 2rem;

  @media (max-width: 730px) {
    flex-direction: column;
  }
`

const Company = styled.p`
  font-size: 3rem;
  line-height: 3rem;
`
const Position = styled.p`
   font-size: 1.25rem;
`

const Social = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5rem;
`

export default Roles