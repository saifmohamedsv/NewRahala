import * as React from "react"
import Header from "./header"

const Layout = ({ children }) => {
  return (
    <>
      <Header siteTitle="Rahala" />
      <main>{children}</main>
    </>
  )
}

export default Layout
