import React from "react"
import { Link } from "gatsby"

import styled from "styled-components"
import Logo from "../pics/logo.svg"

const StyledLink = styled(Link)`
  color: "#5d8aa8";
  &:hover {
    -moz-transition: all 0.22s ease-in;
    -o-transition: all 0.22s ease-in;
    -webkit-transition: all 0.22s ease-in;
    transition: all 0.22s ease-in;
    color: "#2e4757";
  }
`
const Footer = styled.footer`
  flex-shrink: 0;
  margin-top: auto;
  font-size: 1vw;
`

const Page = styled.div`
  margin: 3% 10%;
  padding: auto;
`

const MenuBarContainer = styled.div`
  display: flex;
  margin: 0.5em;
  align-items: center;
`

const TitleContainer = styled.h1`
  font-size: 3em;
  margin: 1em;
`

const Svg = styled.img`
  width: 5em;
`

const PTRLogo = () => {
  return (
    <StyledLink to="/">
      <Svg src={Logo} alt="ptr_logo" />
    </StyledLink>
  )
}

export const Layout = ({ title, children }) => {
  const header = (
    <TitleContainer>
      <StyledLink to={`/`}>{title}</StyledLink>
    </TitleContainer>
  )
  return (
    <Page>
      <MenuBarContainer>
        <PTRLogo />
        <header>{header}</header>
      </MenuBarContainer>
      <main>{children}</main>
      <Footer>
        © {new Date().getFullYear()}, built by
        {` `}
        <a href="https://github.com/orangejuicetin">Justin Choi</a>
      </Footer>
    </Page>
  )
}
