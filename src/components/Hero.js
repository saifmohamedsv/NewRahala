import React from "react"
import styled from "styled-components"
import { Button } from "./Button"
import HeroVid from "../Assets/Videos/RahalaVid.mp4"
const Hero = () => {
  return (
    <HeroContainer>
      <HeroBG>
        <VideoBG
          src={HeroVid}
          type="video/mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </HeroBG>

      <HeroContent>
        <HeroItems>
          <HeroH1>Infinite Destinations</HeroH1>
          <HeroP>Wherever you want</HeroP>
          <Button primary="true" round="true" big="true" to="#trips">
            Explore
          </Button>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero

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

const VideoBG = styled.video`
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
