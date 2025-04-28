import React from "react"
import "./explorer.scss"
import one from "../../assets/one.png"
import ten from "../../assets/ten.png"
import five from "../../assets/five.png"

const Explore = () => {
  return (
    <div className="explore-container">
      <div className="explore-header">
        <h2 className="explore-title">
          Explore Our <br /> Recent articles
        </h2>
        <button className="view-all-btn">
          View all
          <span className="arrow-circle">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.6667 1.33334L1.33333 12.6667M12.6667 1.33334V11.3333M12.6667 1.33334H2.66667"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>
      </div>

      <div className="articles-container">
        <div className="article-card">
          <div className="article-img">
            <img src={one} alt="Article" />
          </div>
          <h3 className="article-title">
            Protect your Multifamily Investments: A Guide to Interest Rate
            Hedges
          </h3>
        </div>

        <div className="article-card">
          <div className="article-img">
            <img src={ten} alt="Article" />
          </div>
          <h3 className="article-title">
            Protect your Multifamily Investments: A Guide to Interest Rate
            Hedges
          </h3>
        </div>

        <div className="article-card">
          <div className="article-img">
            <img src={five} alt="Article" />
          </div>
          <h3 className="article-title">
            Protect your Multifamily Investments: A Guide to Interest Rate
            Hedges
          </h3>
        </div>
      </div>
    </div>
  )
}

export default Explore
