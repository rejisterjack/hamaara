import React from 'react'
import './testimonial.scss'

const Testimonial = () => {
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
    <div className="testimonial">
      {/* Scrolling Logos Section */}
      <div className="testimonial_logos_container">
        <div className="testimonial_logos">
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

export default Testimonial