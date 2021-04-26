import * as React from "react"
import Header from "./header"
import { GlboalStyles } from "./styles/GlobalStyles"

const Layout = ({ children }) => {
  return (
    <>
      <GlboalStyles />
      <Header siteTitle="Rahala" />
      <main>{children}</main>
    </>
  )
}

export default Layout
