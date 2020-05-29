import React from 'react'
import styled from 'styled-components'

const SectionContainer = ({ children}) => (
  <Wrapper>
    {children}
  </Wrapper>
)

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(345px, 1fr));
  grid-auto-rows: 1fr;
  grid-gap: 1rem;
  justify-items: center;
  margin-bottom: 5rem;

  @media (max-width: 658px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }

  @media (max-width: 778px) {
    :nth-child(1) {
      grid-template-rows: auto;
    }
  }
  
  @media (max-width: 688px) {
    :nth-child(1) {
      grid-template-rows: auto;
      justify-items: start;
    }
  }
`

export default SectionContainer
