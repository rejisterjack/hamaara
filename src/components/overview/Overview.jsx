import React from "react";
import "./overview.scss";
import thirteen from "../../assets/thirteen.png";
import fourteen from "../../assets/fourteen.png";

const Overview = () => {
  return (
    <div className="overview">
      <div className="overview_container">
        <div className="overview_header">
          <h2>The Planet Project Overview</h2>
        </div>

        <div className="overview_description">
          <p>Investing in apartment buildings has proven to be a consistently reliable choice.</p>
          <p>Over the last forty years, multifamily investments have consistently outperformed other types of real estate.</p>
          <p>With the U.S. population projected to surpass 380 million in the next 25 years, the demand for multifamily housing is set to rise, solidifying the appeal of investing in such complexes.</p>
        </div>

        <button className="overview_button">Invest With Us</button>

        <div className="overview_image">
          <img src={thirteen} alt="Planet Project" />
          <div className="image_overlay"></div>
        </div>

        <div className="overview_fullwidth" style={{ backgroundImage: `url(${fourteen})` }}>
          <div className="overlay_content">
            <h2>We will Help You Every Steps Of The Way</h2>
            <p>We will Help You Every Steps Of The Way</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
