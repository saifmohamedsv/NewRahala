import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../components/styles/404.css"
import styled from "styled-components"
import HeroVid from "../Assets/ancient1.png"
const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <HeroContainer>
      <HeroBG>
        <VideoBG src={HeroVid} alt="BigCo Inc. logo" />
      </HeroBG>

      <HeroContent>
        <HeroItems>
          <HeroH1>404: Page Not Found</HeroH1>
          <HeroP>
            You just hit a route that doesn&#39;t exist... the sadness.
          </HeroP>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  </Layout>
)

export default NotFoundPage

const HeroContainer = styled.div`
  color: #fff;
  height: 100vh;
  padding: 0 1rem;
  position: relative;
  margin-top: -80px;
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.1) 0%,
        rgba(0, 0, 0, 0.4) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
  }
`

const HeroBG = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

const VideoBG = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`

const HeroContent = styled.div`
  z-index: 3;
  height: calc(100vh - 80px);
  max-height: 100%;
  padding: 0 calc((100vw - 1300px) / 2);
`

const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  max-height: 100%;
  padding: 0;
  color: #fff;
  line-height: 1.1;
`

const HeroH1 = styled.h1`
  font-size: clamp(1.6rem, 6vw, 4rem);
  margin-bottom: 1rem;
  letter-spacing: 3px;
  padding: 0 1rem;
  font-weight: 600;
`

const HeroP = styled.p`
  font-size: clamp(1.4rem, 5vw, 2.4rem);
  letter-spacing: 3px;
  margin-bottom: 1rem;
  font-weight: 300;
`
