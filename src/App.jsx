import React from "react"
import NoticeBar from "./components/notice-bar/NoticeBar"
import HeroSection from "./components/hero/HeroSection"
import Showcase from "./components/showcase/Showcase"
import Planet from "./components/planet/Planet"
import Overview from "./components/overview/Overview"
import Investment from "./components/investment/Investment"
import Distributions from "./components/distributions/Distributions"
import Explore from "./components/explore/Explore"
import Contact from "./components/contact/Contact"
import Social from "./components/social/Social"
import Footer from "./components/footer/Footer"

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
      <Contact />
      <Social />
      <Footer />
    </div>
  )
}

export default App
