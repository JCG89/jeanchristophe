import React from "react"
import PortfolioCarousel from "./PortfolioCarousel"

const Portfolio = () => {
      return (
            <div id="portfolio">
                  <h1 className="projets"> Mon Portfolio</h1>
                  <div className="portfolio">
                        <div className="container">
                              <div className="porfolio-content">
                                    <PortfolioCarousel />
                              </div>
                        </div>
                  </div>
            </div>
      )
}
export default Portfolio

