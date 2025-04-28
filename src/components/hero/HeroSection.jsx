import React from "react"
import Navbar from "../navbar/Navbar"
import "./hero-section.scss"

const HeroSection = () => {
  return (
    <div className="hero_section">
      <Navbar />
      <div className="hero_section_content">
        <h1 className="hero_section_heading">
          <span className="invest">Invest in a </span>
          <span className="future">Brighter</span>
          <br />
          <span className="future">Future with </span>
          <span className="hamaara">Hamaara</span>
        </h1>
        <p className="hero_section_description">
          Join us in transforming urban living at The Planet of Hayward, where
          modern design meets community spirit.
        </p>
        <div className="hero_section_buttons">
          <button className="get-in-touch">Get in Touch</button>
          <button className="invest">Invest</button>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
