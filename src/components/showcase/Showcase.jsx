import React from "react"
import "./showcase.scss"

const Showcase = () => {
  // Placeholder image URL - replace with your actual image
  const placeholderImage = "src/assets/eleven.png"

  return (
    <div className="showcase">
      {/* Cards Section */}
      <div className="showcase_cards">
        {/* Left Card */}
        <div className="showcase_card large">
          <div className="card_image">
            <img src={placeholderImage} alt="Real Estate Investment" />
          </div>
          <div className="card_content">
            <h3>Protecting Capital & Producing Returns</h3>
            <p>Private Real Estate Investments for Accredited Investors</p>
            <button className="learn-more">Learn More</button>
          </div>
        </div>

        {/* Right Cards Grid */}
        <div className="showcase_grid">
          <div className="showcase_card small">
            <h2>$1.02B</h2>
            <p>In Assets</p>
          </div>
          <div className="showcase_card small">
            <h2>$435M+</h2>
            <p>In Equity Raised</p>
          </div>
          <div className="showcase_card small">
            <h2>30</h2>
            <p>Property Acquired</p>
          </div>
          <div className="showcase_card small">
            <h2>6,295</h2>
            <p>Units</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Showcase
