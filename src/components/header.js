import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { BiMenu } from "react-icons/bi"

const Nav = styled.nav`
  height: 80px;
  background: red;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  position: relative;
  z-index: 100;
`
const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`

const Bars = styled(BiMenu)`
  display: none;
  color: #fff;
  top: 0;
  right: 0;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
  }
`

const Header = ({ siteTitle }) => {
  return (
    <Nav>
      <Bars />
      <NavLink to="/"> {siteTitle} </NavLink>
    </Nav>
  )
}

export default Header
