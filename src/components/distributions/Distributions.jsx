import React from 'react'
import './distributions.scss'

const Distributions = () => {
  return (
    <div className="distributions">
      <div className="distributions__overlay"></div>
      <div className="distributions__container">
        <div className="distributions__left">
          <h3 className="distributions__subtitle">Distributions Sent Since 2015:</h3>
          <h2 className="distributions__title">$30 Million</h2>
          <p className="distributions__description">
            Want to know more? Schedule a call with our dedicated Investor
            Relations team and to be the first to be notified when we have new
            accredited offerings open for investment.
          </p>
          <button className="distributions__button">Invest with us</button>
        </div>
        <div className="distributions__right">
          <div className="distributions__image"></div>
        </div>
      </div>
    </div>
  )
}

export default Distributions