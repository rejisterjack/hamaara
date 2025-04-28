import React from "react"
import { scroller } from "react-scroll"
import "./hero-section.scss"

const HeroSection = () => {
  const scrollToSection = (id) => {
    scroller.scrollTo(id, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: 0
    });
  };

  return (
    <div className="hero_section">
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
          <button className="get-in-touch" onClick={() => scrollToSection('contact-form')}>Get in Touch</button>
          <button className="invest" onClick={() => scrollToSection('invest-now')}>Invest</button>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
