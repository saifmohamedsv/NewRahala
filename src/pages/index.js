import * as React from "react"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Trips from "../components/Trips"

const IndexPage = () => (
  <Layout>
    <Seo title="EXPLORE IT" />
    <Hero />
    <Trips id="trips" />
  </Layout>
)

export default IndexPage
