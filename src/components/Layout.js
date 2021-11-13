import React from 'react'
import styled from 'styled-components'

import 'styles/layout.css'

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <main>{children}</main>
      <Footer>
        © {new Date().getFullYear()}, David Quick
      </Footer>
    </LayoutContainer>
  )
}

export default Layout

const LayoutContainer = styled.div`
  margin: 0 auto;
  max-width: 1450px;
  padding: 2rem;
`

const Footer = styled.footer`
  text-align: center;
  margin-top: 2rem;
`