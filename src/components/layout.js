import * as React from "react"
import Header from "./header"
// import { GlboalStyles } from "./styles/GlobalStyles"
import "../components/styles/GlobalStles.css"
const Layout = ({ children }) => {
  return (
    <>
      <Header siteTitle="Rahala" />
      <main>{children}</main>
    </>
  )
}

export default Layout
