import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../components/styles/404.css"
const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <div className="notF">
      <h1>404: Page Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </Layout>
)

export default NotFoundPage
