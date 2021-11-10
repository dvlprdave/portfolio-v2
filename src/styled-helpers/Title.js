import styled from 'styled-components'

export const Title = styled.h1`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: ${props => props.center ? '' : 'center'};
  color: #949495;
  font-size: 1.8rem;

  span:nth-of-type(2):before {
    content:"";
    position: absolute;
    bottom: 0;
    top: 50%;
    left: -3px;
    right: 0;
    height: 0.5em;
    border-top: 1px solid #414145;
    z-index: 13;
    width: ${props => props.center ? '4%' : '20%'};
  }
  
  span:nth-of-type(2) {
    margin: ${props => props.center ? '0 3.4rem' : '0 3rem'};
  }
`