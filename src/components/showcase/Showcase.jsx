import React from "react"
import "./showcase.scss"

const Showcase = () => {
  // Placeholder image URL - replace with your actual image
  const placeholderImage = "src/assets/eleven.png"

  // Logo data for the scrolling section - only gradient backgrounds now
  const logos = [
    { id: 1, name: "Logo" },
    { id: 2, name: "Logo" },
    { id: 3, name: "Logo" },
    { id: 4, name: "Logo" },
    { id: 5, name: "Logo" },
    { id: 6, name: "Logo" },
    { id: 7, name: "Logo" },
    { id: 8, name: "Logo" },
  ]

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

      {/* Scrolling Logos Section */}
      <div className="showcase_logos_container">
        <div className="showcase_logos">
          {/* Duplicate logos to create a continuous loop */}
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <div className="logo_box" key={`logo-${index}`}>
              <div className={`logo_square gradient-${logo.id % 8 || 8}`}>
                {/* No image tag - using gradient background */}
              </div>
              <p>{logo.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Showcase
