import styled from "styled-components"
import { Link } from "gatsby"

export const Button = styled(Link)`
  letter-spacing: 0.5px;
  cursor: pointer;
  background: ${({ primary }) => (primary ? "#673ab7" : "#fff")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "1rem 3.2rem" : ".75rem 2.4rem")};
  color: ${({ primary }) => (primary ? "#fff" : "#4e479e")};
  font-size: ${({ big }) => (big ? "2rem" : "1rem")};
  outline: none;
  border: none;
  min-width: 10rem;
  text-decoration: none;
  transition: 0.3s !important;
  border-radius: ${({ round }) => (round ? "3rem" : "none")};
  &:hover {
    background: ${({ primary }) => (primary ? "#fff" : "#4e479e")};
    color: #673ab7;
    transform: translateY(-5px);
  }
`
