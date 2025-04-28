import React from "react"
import NoticeBar from "./components/notice-bar/NoticeBar"
import HeroSection from "./components/hero/HeroSection"
import Showcase from "./components/showcase/Showcase"
import Planet from "./components/planet/Planet"
import Overview from "./components/overview/Overview"
import Investment from "./components/investment/Investment"

const App = () => {
  return (
    <div>
      <NoticeBar />
      <HeroSection />
      <Showcase />
      <Planet />
      <Overview />
      <Investment />
    </div>
  )
}

export default App
