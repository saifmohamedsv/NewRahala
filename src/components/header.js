import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { BiMenu } from "react-icons/bi"
import { menuData } from "../data/menuData"
import { Button } from "./Button"
const Nav = styled.nav`
  position: relative;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem calc((100vw - 1300px) / 2.5);
  height: 80px;
  z-index: 100;
`
const NavLink = styled(Link)`
  letter-spacing: 1px;
  font-size: 1.6rem;
  color: #fff;
  font-weight: 700;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`
const NavMLink = styled(Link)`
  letter-spacing: 0.5px;
  font-size: 1rem;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  padding: 0rem 1rem;
  height: 100%;
  cursor: pointer;
  transition: 0.3s !important;
  &:hover {
    transform: translateY(-7px);
  }
`
const Bars = styled(BiMenu)`
  display: none;
  color: #fff;
  top: 0;
  right: 0;
  transform: translate(-100%, 75%);
  font-size: 2rem;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
  }
`
const NavMenu = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  /* margin-left: 4rem; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`
const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

//===================== header content ====================
const Header = ({ siteTitle }) => {
  return (
    <Nav>
      <NavLink to="/"> {siteTitle} </NavLink>
      <Bars />
      <NavMenu>
        {menuData.map(item => (
          <NavMLink to={item.link}>{item.title}</NavMLink>
        ))}
      </NavMenu>
      <NavBtn>
        <Button primary="true" round="true" to="/trips">
          Book a Trip
        </Button>
      </NavBtn>
    </Nav>
  )
}

export default Header
