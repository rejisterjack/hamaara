import React from "react"
import NoticeBar from "./components/notice-bar/NoticeBar"
import HeroSection from "./components/hero/HeroSection"
import Showcase from "./components/showcase/Showcase"
import Planet from "./components/planet/Planet"

const App = () => {
  return (
    <div>
      <NoticeBar />
      <HeroSection />
      <Showcase />
      <Planet />
    </div>
  )
}

export default App
