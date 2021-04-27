import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { BiMenu } from "react-icons/bi"
import { menuData } from "../data/menuData"
const Nav = styled.nav`
  height: 80px;
  background: #4e479e;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem calc((100vw - 1300px) / 2);
  position: relative;
  z-index: 100;
`
const NavLink = styled(Link)`
  font-size: 2rem;
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`
const NavMLink = styled(Link)`
  font-size: 1.6rem;
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  transition: 0.3s !important;
  &:hover {
    transform: translateY(-10px);
    font-size: 1.8rem;
  }
`
const Bars = styled(BiMenu)`
  display: none;
  color: #fff;
  top: 0;
  right: 0;
  transform: translate(-100%, 80%);
  font-size: 3rem;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
  }
`
const NavMenu = styled.div`
  display: flex;
  align-items: center;
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
const Button = styled(Link)`
  letter-spacing: 0.5px;
  cursor: pointer;
  background: ${({ primary }) => (primary ? "#4e479e" : "#fff")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "1.6rem 4rem" : "1rem 3.2rem")};
  color: ${({ primary }) => (primary ? "#fff" : "#4e479e")};
  font-size: ${({ big }) => (big ? "2rem" : "1.4rem")};
  outline: none;
  border: none;
  min-width: 10rem;
  text-decoration: none;
  transition: 0.3s !important;
  border-radius: ${({ round }) => (round ? "5rem" : "none")};
  &:hover {
    background: ${({ primary }) => (primary ? "#fff" : "#4e479e")};
    color: #4e479e;
    transform: translateY(-10px);
    letter-spacing: 1.5px;
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
          <NavMLink to={item.link} key={indexedDB}>
            {item.title}
          </NavMLink>
        ))}
      </NavMenu>
      <NavBtn>
        <Button primary="true" round="true">
          Book a Flight
        </Button>
      </NavBtn>
    </Nav>
  )
}

export default Header
