import styled from "styled-components"
import { Link } from "gatsby"

export const Button = styled(Link)`
  letter-spacing: 0.5px;
  cursor: pointer;
  background: ${({ primary }) => (primary ? "#4e479e" : "#fff")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? ".75rem 4.2rem" : ".75rem 2rem")};
  color: ${({ primary }) => (primary ? "#fff" : "#4e479e")};
  font-size: ${({ big }) => (big ? "1.6rem" : "1rem")};
  outline: none;
  border: none;
  min-width: 10rem;
  text-decoration: none;
  transition: 0.3s !important;
  border-radius: ${({ round }) => (round ? "5rem" : "none")};
  &:hover {
    background: ${({ primary }) => (primary ? "#fff" : "#4e479e")};
    color: ${({ primary }) => (primary ? "#4e479e" : "#fff")};
    transform: translateY(-5px);
  }
`
