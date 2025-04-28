import React from "react"
import "./investment.scss"
import fifteen from "../../assets/fifteen.jpg"
import icon1 from "../../assets/icon1.png"
import icon2 from "../../assets/icon2.png"
import icon3 from "../../assets/icon3.png"
import icon4 from "../../assets/icon4.png"

const Investment = () => {
  return (
    <div className="investment-container">
      <div className="investment-header">
        <h2 className="investment-title">
          How It works? Find a Investment home
        </h2>
        <p className="investment-desc">Lorem ipsum dolor sit amet</p>
      </div>

      <div className="investment-content">
        <div className="investment-steps">
          <div className="investment-step">
            <div className="step-icon">
              <img src={icon1} alt="Step 1 Icon" />
            </div>
            <h3 className="step-title">Step 1</h3>
            <p className="step-desc">
              Sumo petentium ut per, at his wisim utinam adipiscing. Est ei
              graeco Lorem ipsum dolor sit amet, consectetur adipiscing
            </p>
          </div>

          <div className="investment-step">
            <div className="step-icon">
              <img src={icon2} alt="Step 2 Icon" />
            </div>
            <h3 className="step-title">Step 2</h3>
            <p className="step-desc">
              Sumo petentium ut per, at his wisim utinam adipiscing. Est ei
              graeco Lorem ipsum dolor sit amet, consectetur adipiscing
            </p>
          </div>

          <div className="investment-step">
            <div className="step-icon">
              <img src={icon3} alt="Step 3 Icon" />
            </div>
            <h3 className="step-title">Step 3</h3>
            <p className="step-desc">
              Sumo petentium ut per, at his wisim utinam adipiscing. Est ei
              graeco Lorem ipsum dolor sit amet, consectetur adipiscing
            </p>
          </div>

          <div className="investment-step">
            <div className="step-icon">
              <img src={icon4} alt="Step 4 Icon" />
            </div>
            <h3 className="step-title">Step 4</h3>
            <p className="step-desc">
              Sumo petentium ut per, at his wisim utinam adipiscing. Est ei
              graeco Lorem ipsum dolor sit amet, consectetur adipiscing
            </p>
          </div>
        </div>

        <div className="investment-image">
          <img src={fifteen} alt="Investment process" />
        </div>
      </div>
    </div>
  )
}

export default Investment
