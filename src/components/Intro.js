import React from "react"
import styled from "styled-components"

const Intro = () => (
  <IntroContainer>
    <IntroStatement>
      <Main>Building interactive products with user-centered design</Main>
      <Sub>
        Hi, I'm David, a Front-end Web Developer from NYC with a passion for
        rich web experiences & web apps. I firmly believe in fostering your
        passion and building things that are an extension of your imagination. I
        find it incredibly rewarding to write clean code and to witness the
        solution of bringing design into development.
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
export default Intro