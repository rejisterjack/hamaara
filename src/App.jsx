import React from "react"
import NoticeBar from "./components/notice-bar/NoticeBar"
import HeroSection from "./components/hero/HeroSection"
import Showcase from "./components/showcase/Showcase"
import Planet from "./components/planet/Planet"
import Overview from "./components/overview/Overview"
import Investment from "./components/investment/Investment"
import Distributions from "./components/distributions/Distributions"
import Explore from "./components/explore/Explore"

const App = () => {
  return (
    <div>
      <NoticeBar />
      <HeroSection />
      <Showcase />
      <Planet />
      <Overview />
      <Investment />
      <Distributions />
      <Explore />
    </div>
  )
}

export default App
