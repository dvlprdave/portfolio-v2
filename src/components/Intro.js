import React from "react"
import styled from "styled-components"

const Intro = () => (
  <IntroContainer>
    <IntroStatement>
      <Main>Digital Craftsman Building For The Web</Main>
      <Sub>
        <AboutInfo>
          Hi, I'm David, a Web Engineer, creative, and father form TX. I've got a blistering passion for rich and fun web experiences and I love sharing what I learn through my <span><StyledLink href='https://papabearcodes.com/' target='_blank' rel='noopener noreferrer'>tech blog</StyledLink></span>. I also make coding focused videos on <span><StyledLink href='https://www.youtube.com/channel/UCo-24yU0YmmHOT9T3fdBRyQ' target='_blank' rel='noopener noreferrer'>YouTube</StyledLink></span>.
        </AboutInfo>
      </Sub>
    </IntroStatement>
  </IntroContainer>
)

const IntroContainer = styled.div`
  margin-top: 6rem;
  margin-bottom: 4rem;
`

const IntroStatement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`

const Main = styled.p`
  max-width: 20ch;
  margin-bottom: 4rem;
  font-size: 4rem;
  line-height: 4.2rem;
  font-weight: 600;

  @media (max-width: 1428px) {
    font-size: 3.8rem;
    line-height: 3.9rem;
  }

  @media (max-width: 768px) {
    font-size: 3.2rem;
    line-height: 3.5rem;
  }

  @media (max-width: 585px) {
    max-width: 100%;
    font-size: 2rem;
    line-height: 2.2rem;
    margin-bottom: 3rem;
  }
`

const Sub = styled.p`
  font-size: 1rem;
  margin-left: auto;
  max-width: 35rem;
  color: grey;

  @media (max-width: 1204px) {
    margin: 0;
    padding: 0;
  }
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
const StyledLink = styled.a`
  border-bottom: 2px solid #fff;
  padding-bottom: 1px;
  transition: ease-in-out 400ms;

  &:hover {
    color: gray;
  }
`

export default Intro