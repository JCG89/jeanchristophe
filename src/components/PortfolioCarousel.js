import React from 'react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import avatar1 from "./images/avatar/avatar1.jpg";
import avatar2 from "./images/avatar/avatar2.jpg";
import avatar3 from "./images/avatar/avatar3.jpg";
import avatar4 from "./images/avatar/avatar4.jpeg";


const PortfolioCarousel = () => {
      return (
            <Carousel>
                  <>
                        <img src={avatar1} alt=" projet-symfony"

                        />
                        <h3> Projet symfony5</h3>
                        <p>Progressively disseminate unique applications whereas plug-and-play e-markets. Professionally unleash value-added interfaces via resource.</p>
                  </>
                  <>
                        <a href="https://github.com/christophegomis89/awara-boutique"><img src={avatar2} alt="mon portfolio" className="portfolio-tof" /></a>
                        <h3> Mon portfolio</h3>
                        <p>Progressively disseminate unique applications whereas plug-and-play e-markets. Professionally unleash value-added interfaces via resource.</p>
                  </>
                  <>
                        <a href="https://github.com/christophegomis89/awara-boutique"><img src={avatar3} alt=" projet-react" className="portfolio-tof" /></a>
                        <h3> Projet React</h3>
                        <p>Progressively disseminate unique applications whereas plug-and-play e-markets. Professionally unleash value-added interfaces via resource.</p>
                  </>
                  <>
                        <a href="https://github.com/christophegomis89/awara-boutique"><img src={avatar4} alt=" smblsemedo" /></a>
                        <h3> site vitrine smbl semedo</h3>
                        <p>Progressively disseminate unique applications whereas plug-and-play e-markets. Professionally unleash value-added interfaces via resource.</p>
                  </>
            </Carousel>
      )
}
export default PortfolioCarousel
