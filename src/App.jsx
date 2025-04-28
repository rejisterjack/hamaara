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
import Testimonial from "./components/testimonial/Testimonial"
import Navbar from "./components/navbar/Navbar"

const App = () => {
  return (
    <div>
      <NoticeBar />
      <Navbar />
      <section id="home">
        <HeroSection />
      </section>
      <section id="about">
        <Showcase />
        <Testimonial />
      </section>
      <section id="our-project">
        <Planet />
        <Overview />
        <Investment />
        <Distributions />
      </section>
      <section id="invest-now">
        <Explore />
        <div id="contact-form">
          <Contact />
        </div>
      </section>
      <Social />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default App
